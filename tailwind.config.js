/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        100: "#d2dbfb",
        200: "#9ab3f6",
        300: "#588cf1",
        400: "#2D68C4",
        500: "#1c4688",
        600: "#0d2751",
        700: "#031028",
      },
      grey: {
        100: "#dbdcde",
        200: "#b3b4b9",
        300: "#8c8e95",
        400: "#686a70",
        500: "#686a70",
        600: "#27282b",
        700: "#101112",
      },
    },

    backgroundImage: {
      simpleGradient: "linear-gradient( #ffffff 50%,#2D68C4 50%)",
      oppSimpleGradient: "linear-gradient( #2D68C4 50%,#ffffff 50%)",
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "Sans-serif"],
        comfortaa: ["comfortaa", "Sans-serif"],
      },
    },
    plugins: [],
  },
};
