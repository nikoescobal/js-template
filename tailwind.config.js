console.log(process.env.NODE_ENV);
module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}