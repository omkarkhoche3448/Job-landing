/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 3s infinite",
        "slow-shimmer": "slow-shimmer 6s infinite linear",
        "gradient-x": "gradient-x 4s ease infinite",
        flow: "flow 8s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slow-shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 100%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 100%",
            "background-position": "right center",
          },
        },
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        flow: "300% 100%",
      },
    },
  },
  plugins: [],
};
