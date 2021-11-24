module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'marathon-blue': '#21326c',
        'margaret-cream': '#f5f5f5',
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
  variants: {},
  plugins: [require('@tailwindcss/aspect-ratio')],
};
