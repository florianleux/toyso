/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#e85d04',
        'bg': '#000000',
        'highlight': '#ffba08',
      },
          fontFamily: {
            'gasoek': ['Gasoek One', 'cursive'],
            'dm': ['DM Serif Text', 'serif'],
            'serif': ['DM Serif Text', 'serif'],
            'sans': ['DM Serif Text', 'serif'],
          },
    },
  },
  plugins: [],
}
