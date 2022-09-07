module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        greenDefault: '#1cd3a2',
        greenLight: '#03ffc8',
        pinkDefault: '#f05c85',
        pinkLight: '#ffb6ce',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        extraWide: '0.75rem',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
