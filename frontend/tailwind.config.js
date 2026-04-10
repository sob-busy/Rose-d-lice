/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Rose Délice
        rose: {
          powder: '#F4D4E6',  // Rose poudré
          light: '#F9E7F0',   // Rose très clair
          medium: '#E8B4D0', // Rose moyen
          dark: '#D4A5C8',    // Rose foncé
        },
        cream: '#FFF8F3',     // Couleur crème
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
