import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FCF8FF",
      black: "#1C1B21",
      error: "#920028",

      primary: {
        low: "#0000",
        default: "#16134A",
        high: "#2E2D4A",
      },

      secondary: {
        low: "#001F2A",
        default: "#126682",
        high: "#87B1C6",
      },
    },
  },
  plugins: [],
};
export default config;
