import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#F5FCFC",
        main: "#1690FF",
        softWhite: "#E2E8F0",
        softBlack: "#0B1221",
        grayBlack: "#404C5E",
        bg: "var(--bg, #F9FAFC)",
        mainBlue: "#1464FF",
        mainGray: " #A0A0A0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
