/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: "#2196F3",
      },
      maxWidth: {
        "screen-me": "1220px",
      },
      spacing: {
        5.5: "1.375rem",
      },
      backgroundImage: {
        "weeping-cat": "url('./img/WeepingCat.jpg')",
      },
      boxShadow: {
        nav: "0px 4px 4px rgba(0, 0, 0, 0.24)",
        cat: "0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};
