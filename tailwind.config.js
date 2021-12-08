module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // background color
      'light-grayish-yellow': '#eae7dc',
      // title color
      'soft-red': '#e98074',
      // subtitle color/primary text color
      'dark-grayish-yellow': '#8e8d8a',
      // secondary text color
      'grayish-orange': '#d8c3a5',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}