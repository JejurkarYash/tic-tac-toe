/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "430px",
    // },
    extend: {
      fontFamily: {
        "tilt-neon": ["Tilt Neon", " Sans-Serif"],
      },
      screens: {
        mobile: "320px",
      },
      colors: {
        backgroundColor: "#E1CCEC",
        containerColor: "#BE9FE1",
        playerBackgroundColor: "#F1F1F6",
        boardColor: "#F1F1F6",
      },
    },
  },
  plugins: [],
};
