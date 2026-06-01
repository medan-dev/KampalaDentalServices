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
        primary: "#005B9F",
        "primary-light": "#0073C7",
        "primary-dark": "#004B87",
        secondary: "#28A745",
        background: "#F4F7F6",
        "background-alt": "#FFFFFF",
        accent: "#DC3545",
        "accent-light": "#E4606D",
        "accent-dark": "#C82333",
        dark: "#212529",
        "neutral-dark": "#495057",
        "neutral-light": "#E0E4E8",
        muted: "#6C757D",
        "muted-light": "#CBD3DA",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        inner: "none",
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;