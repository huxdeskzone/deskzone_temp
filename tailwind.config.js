/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "425px",
      lsm: "600px",
      md: "768px",
      // => @media (min-width: 768px) { ... }

      smd: "950px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  darkMode: "class",

  // plugins: [require("flowbite/plugin")],
};
