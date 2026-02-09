/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lime1: "#d7f25a",
        lime2: "#b9e334",
        lime3: "#a5d01e",
        accent: "#ff8b3d",
        accentDark: "#e0631d",
        wood: "#9c5a2a"
      },
      boxShadow: {
        card: "0 18px 40px rgba(44, 50, 20, 0.22)"
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Space Grotesk'", "system-ui", "sans-serif"]
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        bouncey: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        wobble: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "75%": { transform: "rotate(-2deg)" }
        },
        snooze: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        aura: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.08)", opacity: "1" }
        },
        zzz: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(-20px)", opacity: "0" }
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0.9)", opacity: "0.4" },
          "50%": { transform: "scale(1.1)", opacity: "1" }
        },
        roll: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(-18px) rotate(-12deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" }
        },
        toyshake: {
          "0%, 100%": { transform: "rotate(0deg) translateY(0)" },
          "25%": { transform: "rotate(-12deg) translateY(-4px)" },
          "50%": { transform: "rotate(12deg) translateY(2px)" },
          "75%": { transform: "rotate(-8deg) translateY(-2px)" }
        }
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        bouncey: "bouncey 1.8s ease-in-out infinite",
        wobble: "wobble 2s ease-in-out infinite",
        snooze: "snooze 3s ease-in-out infinite",
        aura: "aura 3.6s ease-in-out infinite",
        zzz: "zzz 1.6s ease-in-out infinite",
        sparkle: "sparkle 1.2s ease-in-out infinite",
        roll: "roll 1.2s ease-in-out infinite",
        toyshake: "toyshake 0.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
