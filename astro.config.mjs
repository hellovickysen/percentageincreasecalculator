import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://percentageincreasecalculator.xyz',
  integrations: [sitemap()],
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
