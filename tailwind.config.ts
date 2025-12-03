import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BE123C", // Rose Red (Luxe)
        secondary: "#D4AF37", // Gold
        dark: "#1F2937",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
export default config;