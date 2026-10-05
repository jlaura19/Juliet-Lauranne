/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1018",
        panel: "#111923",
        "panel-raised": "#17222e",
        line: "#283845",
        cyan: "#57dff5",
        violet: "#b49bff",
        muted: "#9aabb8",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(87, 223, 245, 0.13)",
      },
    },
  },
  plugins: [],
};
