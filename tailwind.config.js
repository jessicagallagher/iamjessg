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
        softBlack: '#212121',
        lightGrey: '#eeeeee',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      letterSpacing: {
        extraWide: '0.75rem',
      },
      screens: {
        xs: '375px',
      },
      height: {
        imgHeight: '300px',
      },
      width: {
        imgWidth: '300px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
