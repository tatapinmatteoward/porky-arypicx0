/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B22222',
        accent: '#FFD700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
