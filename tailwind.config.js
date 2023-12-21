/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      colors: {
        // Using modern `hsl`
        orange: 'hsl(var(--color-orange) / <alpha-value>)',
        tomato: 'hsl(var(--color-tomato) / <alpha-value>)',
        dark: 'hsl(var(--color-dark-grey) / <alpha-value>)',
        charcoal: 'hsl(var(--color-charcoal-grey) / <alpha-value>)',
        grey: 'hsl(var(--color-grey) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
