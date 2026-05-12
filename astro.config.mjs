// // @ts-check
// import { defineConfig } from 'astro/config';

// const site = process.env.SITE_URL ?? 'https://fatlhr.github.io';
// const base = process.env.BASE_PATH ?? '/fatihas-portofolio';

// // https://astro.build/config
// export default defineConfig({
//   site,
//   base,
// });


// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 1. Import plugin Tailwind untuk Vite

// Sesuaikan URL fallback ke domain DO kamu nanti jika sudah tahu, atau biarkan default.
const site = process.env.SITE_URL ?? 'https://fatlhr.github.io';

// 2. Ganti fallback base path menjadi '/' karena DigitalOcean App Platform menggunakan root direktori secara default, bukan sub-direktori seperti GitHub Pages.
const base = process.env.BASE_PATH ?? '/'; 

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()], // 3. Daftarkan plugin Tailwind di Vite
  },
});