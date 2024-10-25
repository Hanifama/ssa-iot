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
        primary: "#2D3748", // dark grey-blue
        secondary: "#4A5568", // Soft medium grey
        accent: "#D69E2E", // Gold

        // Warna netral
        background: "#F7FAFC", // Light grey-white 
        foreground: "#1A202C", // Dark grey 
        muted: "#A0AEC0", // grey 
        
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
