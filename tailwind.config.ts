import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './about/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColor1: "#312436",
        customColor2: "#302444",
        customColor3: "#182c2c",
        customColor4: "#2d362f",
        customColor5: "#939294",
        customColor6: "#66317a",
        customColor7: "#2f2543",
        customColor8: "#1a2c2e",
        customColor9: "#2c2c2c",
      },
    },
  },
  plugins: [],
};
export default config;
