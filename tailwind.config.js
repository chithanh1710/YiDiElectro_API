/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Outfit, monospace" },
    extend: {
      colors: {
        default: "#eee",
        gray9: "#212529",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"], // Tùy chỉnh phông chữ cho body
      },
    },
  },
  plugins: [],
};
