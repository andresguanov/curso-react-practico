module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        //To CardsContainer
        'container': 'repeat(auto-fill, 240px)'
      }
    },
  },
  plugins: [],

}
