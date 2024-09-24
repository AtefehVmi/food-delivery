/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "product-sans": ["Product Sans", "sans-serif"],
      },
      colors: {
        mainBackground: "#FFFFFF",
        rectangleBG1: "#FFDD0066",
        rectangleBG2: "#FF7D0582",
        rectangleBG3: "#FF7D0580",
        secondary: "#BDBDBD",
        secondary1: "#F0F0F0",
        color1: "#2D2D2D",
        primary: "#323232",
        accent: "#1BCF92",
        gray: "#F2F2F2",
      },
      backdropBlur: {
        customMain: "8px",
        customRec: "200px",
      },
      fontSize: {
        small: "14px",
      },
    },
  },
  plugins: [],
};
