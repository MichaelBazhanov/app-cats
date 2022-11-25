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
        orange: "#F24E1E",
      },
      maxWidth: {
        "screen-me": "1360px",
      },
      spacing: {
        5.5: "1.375rem",
        9.5: "2.375rem",
        29: "7.25rem",
      },
      backgroundImage: {
        "weeping-cat": "url('./img/WeepingCat.jpg')",
        "gradient-cat":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 58.85%);",
      },
      boxShadow: {
        small: "inset 0px 0px 5px rgba(0, 0, 0, 0.2)",
        cat: "0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18)",
        nav: "0px 4px 4px rgba(0, 0, 0, 0.24)",
      },
      minHeight: {
        'cat': '14rem',
      },
    },
  },
  plugins: [],
};
