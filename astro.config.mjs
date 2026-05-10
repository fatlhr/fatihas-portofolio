// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://fatlhr.github.io';
const base = process.env.BASE_PATH ?? '/fatihas-portofolio';

// https://astro.build/config
export default defineConfig({
  site,
  base,
});
