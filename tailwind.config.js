const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'green-default': '#1cd3a2',
        'green-light': '#03ffc8',
        'pink-default': '#f05c85',
        'pink-light': '#ffb6ce',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
