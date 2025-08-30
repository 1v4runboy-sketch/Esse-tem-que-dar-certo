/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
      "*.{js,ts,jsx,tsx,mdx}"
],
  theme: {
    extend: {
      colors: {
        weg: { DEFAULT: "#0057B8" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        card: "0 1px 2px 0 rgba(0,0,0,0.08), 0 1px 3px 1px rgba(0,0,0,0.06)",
      },
      keyframes: {
        pulseSoft: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 1s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
