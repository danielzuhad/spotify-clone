import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      background: "#1B1B1F",
      white: "#ffff",
      black: "#000",
      surBackground: "#353438",
      error: "#920028",
      primary: {
        "20": "#60004B",
        "30": "#7D1F64",
        "40": "#9A397D",
      },
      onPrimary: {
        "80": "#FFAEDE",
        "90": "#FFD8EC",
        "100": "#FFECF4",
      },
      secondary: {
        "20": "#640036",
        "30": "#831C4D",
        "40": "#A23665",
      },
      onSecondary: {
        "80": "#FFB0CB",
        "90": "#FFD9E3",
        "100": "#FFECF0",
      },
    },
  },
  plugins: [],
};
export default config;
