import bronzeTrait from "./src/images/traits/Hexagons/bronze.svg";
import silverTrait from "./src/image/traits/Hexagons/silver.svg";
import goldTrait from "./src/images/traits/Hexagons/gold.svg";
import prismaticTrait from "./src/images/traits/Hexagons/chromatic.svg";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    plugins: [],
  },
};

// //  traitBackground: {
//   //bronze: bronzeTrait,
//   silver: silverTrait,
//   gold: goldTrait,
//   prismatic: prismaticTrait,
