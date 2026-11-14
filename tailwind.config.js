/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fef5da",
        "paper-card": "#FFFFFF",
        "paper-subtle": "#F6EDD0",
        "paper-border": "#E8DEC0",
        ink: {
          DEFAULT: "#2c2e35",
          light: "#52555f",
          muted: "#7a7d88",
        },
        accent: {
          rust: "#fa575e",
          coral: "#fa575e",
          navy: "#2c2e35",
          olive: "#7D8C6C",
          yellow: "#ECAE3A",
          cream: "#EDE5D8",
          pink: "#FFA0AC",
        },
      },
      fontFamily: {
        serif: ["'DM Serif Display'", "'Playfair Display'", "Georgia", "serif"],
        display: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      boxShadow: {
        ink: "4px 4px 0px #2c2e35",
        "ink-sm": "2px 2px 0px #2c2e35",
        "ink-lg": "6px 6px 0px #2c2e35",
        "ink-hover": "6px 6px 0px #fa575e",
      },
    },
  },
  plugins: [],
};
