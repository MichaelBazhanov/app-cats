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
        'screen-me': '1220px',
      },
      spacing: {
        '5.5': '1.375rem',
      },
      backgroundImage: {
        'weeping-cat': "url('./img/WeepingCat.jpg')",
      }
    },
  },
  plugins: [],
};
