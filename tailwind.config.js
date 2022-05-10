module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2md': {'min': '1400px'},
        //=> @media (min-height: 800px) { ... }
      }
    },
    fontFamily:{
      body: ['Indie Flower']
    }
  },
  plugins: [],
}
