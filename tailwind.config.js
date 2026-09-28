/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kaizel: {
          dark: "#0B0F17",
          darker: "#06080D",
          surface: "#141B26",
          surfaceHover: "#1D2736",
          light: "#F8FAF9",
          offwhite: "#F0F4F8",
          blue: "#0066FF",
          blueHover: "#0052CC",
          blueLight: "rgba(0, 102, 255, 0.15)",
          accent: "#00D2FF",
          textDark: "#0B0F17",
          textMuted: "#8E9BB0",
          textLight: "#F8FAF9",
          borderDark: "rgba(255, 255, 255, 0.1)",
          borderLight: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'grid-line': 'gridLine 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gridLine: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        }
      },
      boxShadow: {
        'glow': '0 0 25px rgba(0, 102, 255, 0.25)',
        'glow-lg': '0 0 50px rgba(0, 102, 255, 0.35)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
