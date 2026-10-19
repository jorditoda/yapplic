# Yapplic

Portfolio of **[yapplic.com](https://yapplic.com)** — the mobile apps built by
[Jordi Toda](https://github.com/jorditoda) under the Yapplic name:
**Rally HUD**, **Like This**, **PointerPointer**, **Hold King** and **Sad Trombone**.

## Repository layout

| Path | Contents |
|---|---|
| [`portfolio/`](portfolio/) | Astro site — pages, components, styles and i18n dictionary |
| [`.github/workflows/`](.github/workflows/) | CI: builds the site and deploys it to GitHub Pages on push to `master` |
| `CNAME` | Custom domain served by GitHub Pages (`yapplic.com`) |

## Development

```sh
cd portfolio
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static output in portfolio/dist
```

The site is static (English and Spanish, at `/` and `/es` respectively) and deploys
automatically on every push to `master`.

See [`portfolio/README.md`](portfolio/README.md) for details on the structure, i18n
and SEO setup.

## License

[GPL-3.0](LICENSE)
