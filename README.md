# Fatiha Rahmat - Mobile Developer Portfolio

A minimalist, responsive, and SEO-friendly personal portfolio website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). The design is heavily inspired by the classic "Typewriter Document" aesthetic and the popular [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## 🚀 Features

- **Minimalist Design**: Clean, monochrome typewriter aesthetic focusing on content and readability.
- **Dark Mode**: Built-in light/dark theme toggle saving preferences in `localStorage`.
- **Fast & SEO Friendly**: Leveraging Astro's zero-JS by default architecture for optimal performance.
- **Markdown Blog**: Included setup for writing blog posts easily using Markdown.
- **Responsive**: Fully responsive design for mobile, tablet, and desktop viewing.

## 🛠 Tech Stack

- **Framework**: [Astro v6](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: IBM Plex Mono (Google Fonts)

## 💻 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/fatlhr/fatihas-portofolio.git
   cd fatihas-portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321` (or whichever port is assigned).

## 📁 Project Structure

- `src/components/`: Reusable UI components (Header, Footer, Sections, etc.)
- `src/layouts/`: Base HTML layouts and Blog layout.
- `src/pages/`: Astro pages defining the routes (e.g., `index.astro`, `blogs.astro`).
- `src/pages/blogs/`: Markdown files for your blog posts.
- `src/data/`: Data files (e.g., `projects.js`).
- `src/styles/`: Global CSS and Tailwind configurations.
- `public/`: Static assets like images and your `resume.pdf`.

## 🚢 Deployment

This Astro project is ready to be deployed on any static hosting provider like **Vercel**, **Netlify**, or **GitHub Pages**. Simply connect your repository and set the build command to `npm run build`.

---
*Developed by Fatiha Rahmat.*
