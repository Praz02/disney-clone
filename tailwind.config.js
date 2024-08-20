/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  safelist: [
    "justify-between",
    "items-center",
    "flex",
    // Add any other classes you use dynamically
  ],
};
