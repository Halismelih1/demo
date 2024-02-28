/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: {
          light: '#f5f5f5',
          DEFAULT: '#888888',
          dark: '#708090',
        },
        customBlue: '#1e90ff',
        customYellow: '#ffd700',
      },
    },
  },
  plugins: [],
}

