/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        espresso: "#2C1A0E",
        terracotta: "#C4622D",
        sand: "#E8DFD0",
        sage: "#8A9E7B",
        "sand-dark": "#D4C8B5",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
