/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'elegant-black': '#0A1117',
        'custom-center': '#413f3f', // Puedes ajustar este tono más claro según tus necesidades
        'custom-light': '#8f8b8b', // Puedes ajustar este tono más claro según tus necesidades
      },
    },
  },
  plugins: [],
}

