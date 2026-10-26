// Generates public/og.png (1200x630) from the brand colours, fonts and the app
// icons listed in src/data/apps.ts. Run with: npm run og
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const W = 1200;
const H = 630;

const colors = { bg: "#FBF6EE", text: "#2B2118", muted: "#6E5D4E", accent: "#B04A22" };
const tagline = "Small apps, handmade in Riudoms.";

// Icons come from the import order in apps.ts, which is the page order.
const appsSource = readFileSync(`${root}src/data/apps.ts`, "utf8");
const icons = [...appsSource.matchAll(/from "\.\.\/assets\/icons\/([\w-]+\.png)"/g)].map(
  (m) => `${root}src/assets/icons/${m[1]}`,
);

// Fonts are converted to outlines because the SVG renderer cannot load web fonts.
const loadFont = (path) => {
  const buf = readFileSync(path);
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
};
const fraunces = loadFont(`${root}node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff`);
const dmSans = loadFont(`${root}node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff`);

// opentype.js cannot apply these fonts' contextual substitutions, so glyphs are laid out
// one by one (advance widths only, no ligatures), which is enough for a short headline.
// opentype.js' own serialiser can emit exponent notation (e.g. 1e-7), which breaks the
// renderer, so path commands are written out with fixed decimals.
const pathData = (path) =>
  path.commands
    .map((c) => {
      const n = (v) => Number(v.toFixed(2));
      switch (c.type) {
        case "M":
        case "L":
          return `${c.type}${n(c.x)} ${n(c.y)}`;
        case "Q":
          return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
        case "C":
          return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
        default:
          return "Z";
      }
    })
    .join("");

const textPath = (font, text, x, y, size, fill) => {
  const scale = size / font.unitsPerEm;
  let cursor = x;
  let paths = "";
  for (const char of text) {
    const glyph = font.charToGlyph(char);
    paths += `<path d="${pathData(glyph.getPath(cursor, y, size))}"/>`;
    cursor += glyph.advanceWidth * scale;
  }
  return `<g fill="${fill}">${paths}</g>`;
};

const left = 90;
const iconSize = 100;
const gap = 24;
const iconY = 445;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${colors.bg}"/>
  <rect x="${left}" y="150" width="72" height="8" rx="4" fill="${colors.accent}"/>
  ${textPath(fraunces, "Yapplic", left, 304, 150, colors.text)}
  ${textPath(dmSans, tagline, left, 382, 42, colors.muted)}
</svg>`;

const radius = Math.round(iconSize * 0.2237); // iOS icon corner radius
const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}"><rect width="${iconSize}" height="${iconSize}" rx="${radius}"/></svg>`,
);

const tile = await sharp({
  create: { width: iconSize, height: iconSize, channels: 4, background: "#FFFFFF" },
})
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();

// Icons sit on a white tile so transparent ones stay legible on the cream background.
const iconLayers = await Promise.all(
  icons.map(async (file, i) => ({
    input: await sharp(
      await sharp(tile)
        .composite([{ input: await sharp(file).resize(iconSize, iconSize).png().toBuffer() }])
        .png()
        .toBuffer(),
    )
      .composite([{ input: mask, blend: "dest-in" }])
      .png()
      .toBuffer(),
    left: left + i * (iconSize + gap),
    top: iconY,
  })),
);

const png = await sharp(Buffer.from(svg)).composite(iconLayers).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(`${root}public/og.png`, png);
console.log(`public/og.png written (${icons.length} icons, ${(png.length / 1024).toFixed(0)} KB)`);
