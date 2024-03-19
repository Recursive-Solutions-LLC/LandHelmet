import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "25vh": "25vh"
      },
      colors: {
        "p1": "#80BB2A",
        "p2": "#FFFFFF",
        "s1": "#22577A",
        "s2": "#000000",
        "s3": "#EDEAE0",
        "gold":"#FFD700",
        "lightgold":"#FFD70070"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'title':"Rift Soft",
        'body': 'sans-serif'
      },
    },
  },
  plugins: [],
};
export default config;
