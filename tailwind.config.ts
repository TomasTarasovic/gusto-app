import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // Primárna šalviová (Sage) - evokuje bylinky a čerstvosť
        primary: {
          50: "#f4f7f4",
          100: "#e6ede6",
          200: "#ceddce",
          300: "#a7bfa7",
          400: "#7c9c7c",
          500: "#5d7c5d", // Hlavná farba pre buttony a ikony
          600: "#486148",
          700: "#3b4e3b",
          DEFAULT: "#5d7c5d",
          foreground: "#ffffff",
        },
        // Sekundárna oranžová (Spice) - akcent pre dôležité prvky (napr. "Start Cooking")
        accent: {
          50: "#fff8f1",
          100: "#feefde",
          200: "#fcd9bc",
          300: "#f9ba8e",
          400: "#f48e58",
          500: "#ef6d2d", // Akcentná farba pre CTA
          600: "#e15621",
          DEFAULT: "#ef6d2d",
          foreground: "#ffffff",
        },
        // Neutrálne pozadie (Off-white) - aby recepty pôsobili ako na čistom papieri
        background: "#fafaf9",
        card: "#ffffff",
        muted: "#f5f5f4",
      },
      borderRadius: {
        lg: "1rem", // Zaoblenejšie rohy pôsobia priateľskejšie a modernejšie
      },
    },
  },
};

export default config;
