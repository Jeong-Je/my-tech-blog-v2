/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "''",
            },
            a: {
              textDecoration: "none", 
              color: "#0099ff",
              "&:hover": {
                color: "#1d4ed8",
              },
            },
            "code::after": {
              content: "''",
            },
            code: {
              padding: "3px",
              "font-weight": "400",
              backgroundColor: "#e7e5e4",
              borderRadius: "0.5rem",
              color: "#ef4444",
            },
            cite: {
              color: "grey",
              "font-size": "0.85rem",
              display: "block",
              "text-align": "center",
              "overflow-x": "auto", // 모바일 버전에서 url이 너무 길 경우 대비
            },
            img: {
              margin: "auto",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
