// // @ts-check
// import { defineConfig } from 'astro/config';

// const site = process.env.SITE_URL ?? 'https://fatiharahmat.dev';
// const base = process.env.BASE_PATH ?? '/fatihas-portofolio';

// // https://astro.build/config
// export default defineConfig({
//   site,
//   base,
// });


// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://fatiharahmat.dev';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});