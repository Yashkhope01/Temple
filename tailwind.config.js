/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
    './views/**/*.{js,jsx,mdx}',
    './models/**/*.{js,jsx,mdx}',
    './controllers/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Religious & Spiritual color palette - warm, earthy, minimal
        primary: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4dd',
          300: '#d4cdc2',
          400: '#b8aea0',
          500: '#9a8d7a',
          600: '#7a6d5c',
          700: '#5d5244',
          800: '#3d352b',
          900: '#2a231c',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefcc',
          200: '#ffe099',
          300: '#ffd166',
          400: '#ffc233',
          500: '#ffb300',
          600: '#cc8f00',
          700: '#996b00',
          800: '#664700',
          900: '#332400',
        },
        saffron: {
          50: '#fff5e6',
          100: '#ffe8cc',
          200: '#ffd199',
          300: '#ffba66',
          400: '#ffa333',
          500: '#ff8c00',
          600: '#cc7000',
          700: '#995400',
          800: '#663800',
          900: '#331c00',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

