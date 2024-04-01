import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#26235B",
        "yellow":"#FFB606",
        "whitex":"#F6F6F6",
        "red":"#FF0000",
        "green":"#128100",
      }
    },
  },
  plugins: [],
};
export default config;
