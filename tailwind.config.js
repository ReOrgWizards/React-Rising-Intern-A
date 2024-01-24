/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "Sans-serif"],
        comfortaa: ["comfortaa", "Sans-serif"],
      },
    },
    plugins: [],
  },
};
