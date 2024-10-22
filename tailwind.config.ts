import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}", 
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna utama
        primary: "#2D3748", // Elegant dark grey-blue
        secondary: "#4A5568", // Soft medium grey
        accent: "#D69E2E", // Rich gold for accents

        // Warna netral
        background: "#F7FAFC", // Light grey-white background
        foreground: "#1A202C", // Dark grey text
        muted: "#A0AEC0", // Muted grey for secondary text

        // Warna tambahan untuk kebutuhan spesifik
        info: "#3182CE", // Soft blue for info
        success: "#38A169", // Calming green for success messages
        warning: "#ED8936", // Warm orange for warnings
        danger: "#E53E3E", // Strong red for errors
      },
    },
  },
  plugins: [],
};

export default config;
