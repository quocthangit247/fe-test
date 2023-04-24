/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#414141",
        "dark-light": "#2E2E2E",
        "primary-gray": "#777777",
        "light-gray": "#707070",
        "primary-orange": "#FF963C",
        "primary-yellow": "#FFCC21",
      },
    },
  },
  plugins: [],
};
