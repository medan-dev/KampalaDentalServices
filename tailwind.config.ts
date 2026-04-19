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
        primary: "#0D7377",
        "primary-light": "#12999E",
        "primary-dark": "#095456",
        secondary: "#14FFEC",
        background: "#ffffff",
        "background-alt": "#F7F7F9",
        accent: "#FF6B35",
        "accent-light": "#FF8C61",
        "accent-dark": "#E65A2B",
        dark: "#1A1A2E",
        "neutral-dark": "#1A1A2E",
        "neutral-light": "#F7F7F9",
        muted: "#4A4A68",
        "muted-light": "#F7F7F9",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;