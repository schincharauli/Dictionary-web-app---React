/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColorDark: "#050505",
        bgColorLight: "#050505",
        inputColorDark: "#1F1F1F",
        textColor: "#2D2D2D",
        greyTextLightMode: "#757575",
        inputColorLight: "#F4F4F4",
        violet: "#A445ED",
        red: "#FF5252",
        dark: "#050505",
      },
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
        Inter: ["Inter", "sans-serif"],
        Lora: ["Lora", "serif"],
      },
    },
    plugins: [],
  },
};
