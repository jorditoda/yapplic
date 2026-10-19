import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yapplic.com',
  outDir: 'dist',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // The 404 page is an error document, it should not be indexed or listed
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
