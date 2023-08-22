import { type Config } from "tailwindcss";

export default {
  // important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tungsten: ["Tungsten", " sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
