/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        weg: {
          DEFAULT: "#0066A6" // azul WEG aprovado
        }
      },
      keyframes: {
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        },
        pulseOnce: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" }
        }
      },
      animation: {
        spinY: "spinY var(--spin-dur,6s) linear infinite",
        pulseOnce: "pulseOnce 1s ease"
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(0,0,0,0.25)"
      }
    }
  },
  darkMode: "class",
  plugins: []
}
