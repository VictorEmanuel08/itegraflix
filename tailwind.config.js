/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorWhite: "#E7E4E4",
        colorGrey: "#919191",
        colorOrange: "#FB8200",
        colorBlack: "#2D2B2B",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
