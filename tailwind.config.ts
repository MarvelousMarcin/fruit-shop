import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-main": "#2B2D42",
        "orange-main": "#F4A261",
        "gray-light": "#F3F1F1",
        "gray-special": "#8D99AE",
        "blue-light": "#C7F5FF",
        "orange-light": "#FFE1D0",
        "blue-dark": "#BFD1FF",
        yellow: "#FFF1DD",
        red: "#FFE8E8",
        green: "#BFFFE1",
      },
      boxShadow: {
        special: "0px 30px 60px 0px rgba(32, 32, 32, 0.06);",
      },
    },
  },
  plugins: [],
};
export default config;
