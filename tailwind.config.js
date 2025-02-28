/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: 1536,
      },
      colors: {
        primary: "#222222",
        secandari: "#7A7A7A",
        brand: "#32375C",
        navegrey: "#244255",
      },
      fontFamily: {
        nunitoFont: ["Nunito", "serif"],
        interFont: ["Inter", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};