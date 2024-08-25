/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#ffffff",
        success: "#ffffff",
        info: "#ffffff",
        danger: "#ffffff",
        whitesmoke: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
