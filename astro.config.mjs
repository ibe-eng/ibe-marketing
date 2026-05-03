import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibe.engineering',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
