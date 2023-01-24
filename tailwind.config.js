/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto_Slab"],
        orbitron: ["Orbitron"],
      },
      colors: {
        primary: "#E5E6E6",
        secundary: "#FFFFFF",
        d_primary: "#20252E",
        d_secundary: "#2A303C",
        decoration: "#de1d8d",
      },
    },
  },
  plugins: [],
};
