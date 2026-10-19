# Yapplic Portfolio

Source code of [yapplic.com](https://yapplic.com) — the portfolio of Jordi Toda, showcasing
the mobile apps built under the Yapplic name: **Rally HUD**, **Like This**,
**PointerPointer**, **Hold King** and **Sad Trombone**.

## Stack

- [Astro 5](https://astro.build) — static site generator (zero JS by default)
- TypeScript — types for components and the i18n dictionary
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — generated `sitemap-index.xml`
- Hosted on **GitHub Pages** with a custom domain (`yapplic.com`)

## Getting started

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

## Project structure

```text
portfolio/
├── public/               # static assets: favicons, OG images, styles.css, robots.txt
├── src/
│   ├── assets/           # app icons and screenshots (optimised at build time)
│   ├── components/
│   │   ├── About.astro   # about page content (receives lang)
│   │   ├── Footer.astro
│   │   ├── Header.astro  # nav + theme toggle + language switcher
│   │   ├── Home.astro    # home page content (receives lang)
│   │   └── PhoneMockup.astro
│   ├── i18n.ts           # locales + translation dictionary (en / es)
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, SEO, JSON-LD, theme script
│   └── pages/
│       ├── index.astro       # /
│       ├── about.astro       # /about
│       ├── 404.astro         # 404.html (noindex, bilingual)
│       └── es/               # Spanish versions (/es, /es/about)
└── astro.config.mjs
```

## Internationalisation (i18n)

The site is available in **English (default)** and **Spanish**:

- English lives at `/` and `/about`, Spanish at `/es/` and `/es/about/`
- The default locale is unprefixed (`prefixDefaultLocale: false` in `astro.config.mjs`)
- All copy lives in [`src/i18n.ts`](src/i18n.ts); TypeScript enforces that every
  locale defines the same keys
- Components receive a `lang` prop (`Locale`) and use `useTranslations(lang)`
- `BaseLayout` emits `hreflang` alternates (`en`, `es`, `x-default`) automatically

**To add a new locale** (e.g. `ca`):

1. Add `"ca"` to `locales` in `src/i18n.ts` and define a dictionary with every key
2. Add `ca` to `i18n.locales` in `astro.config.mjs`
3. Create `src/pages/ca/` with the page wrappers (`<Home lang="ca" />`, …)

**To add a new page:**

1. Create the content component in `src/components/` receiving `lang`
2. Create thin wrappers: `src/pages/<name>.astro` (en) and `src/pages/es/<name>.astro` (es)

## SEO

- Canonical URLs and `hreflang` alternates on every page
- Open Graph + Twitter cards with a 1200×630 social image
- JSON-LD structured data: `WebSite` + `Person` (every page) and an
  `ItemList` of `SoftwareApplication` (home page)
- Auto-generated sitemap (the 404 page is filtered out)
- `404.html` is served by GitHub Pages for unknown URLs, marked `noindex`

## Deployment

Pushes to `master` trigger the
["Deploy Astro site to GitHub Pages" workflow](../.github/workflows), which runs
`npm ci && npm run build` and publishes `portfolio/dist`. The custom domain is
configured via [`CNAME`](../CNAME) and the `site` value in `astro.config.mjs`.

## License

[GPL-3.0](../LICENSE)
