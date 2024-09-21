/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.tsx"],
  theme: {
    extend: {
      colors: {
        "fills-tertiary": "rgb(var(--color-fills-tertiary) / <alpha-value>)",
        "labels-secondary":
          "rgb(var(--color-labels-secondary) / <alpha-value>)",
      },
      opacity: {
        12: "0.12",
      },
      borderRadius: {
        apple: "10px",
      },
      animation: {
        search: "searchbar 6s ease-in infinite",
        "search-delay-1": "searchbar 6s ease-in infinite 1.5s",
        "search-delay-2": "searchbar 6s ease-in infinite 3s",
        "search-delay-3": "searchbar 6s ease-in infinite 4.5s",
      },
      keyframes: {
        searchbar: {
          "0%": {
            top: "100%",
            visibility: "visible",
          },
          "25%": {
            top: 0,
            visibility: "visible",
          },
          "50%": {
            top: "-100%",
            visibility: "hidden",
          },
          "100%": {
            top: "100%",
            visibility: "hidden",
          },
        },
      },
    },
  },
  plugins: [],
};
