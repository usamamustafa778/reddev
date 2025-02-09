/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: "#FF332C",
        secondary: "#DC2626",
        dgray: "#333333",
        lgray: "#E8E8E8",
        innerbanner: "#075861",
        button: "#00A2FF",
        colorBanner: "#0E1859",
        heading: "#180030",
      },
      gridTemplateColumns: {
        navbar: "1fr 1fr 0.4fr",
        footer: "1fr 0.5fr 0.5fr",
        tab: "0.4fr 1fr",
        portfolio: " 0.4fr 1fr",
        form: " 0.4fr 1fr",
      },
      backgroundImage: {
        banner: "url(/img/b1.jpg)",
        banner1: "url(/img/b2.avif)",
        banner2: "url(/img/b3.webp)",
        dev: "url(/img/bg.avif)",
        iot: "url(/img/iotbanner.jpg)",
        "custom-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      animation: {
        slideIn: "slideIn 0.2s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
