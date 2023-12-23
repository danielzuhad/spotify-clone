import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffff",
      black: "#000",
      error: "#920028",

      primary: {
        low: "#FFB6D3",
        default: "#FFB0D0",
        high: "#FFF9F9",
      },

      secondary: {
        low: "#E5C1CE",
        default: "#E1BDC9",
        high: "#FFF9F9",
      },
    },
  },
  plugins: [],
};
export default config;
