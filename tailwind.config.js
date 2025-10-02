/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': 'var(--color-highlight)',
        'text': 'var(--color-text)',
        'background': 'var(--color-background)',
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
