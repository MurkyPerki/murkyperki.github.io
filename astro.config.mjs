
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://murkyperki.github.io',
  base: '/',
  outDir: 'dist',
  markdown: {
    shikiConfig: {
      theme: "nord",     
      wrap: true,
    },
  },
});

