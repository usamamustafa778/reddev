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
        primary: "#DC2626",
        secondary: "#EA580C",
        accent: "#F97316",
        dgray: "#1E293B",
        lgray: "#F1F5F9",
        innerbanner: "#075861",
        button: "#DC2626",
        colorBanner: "#0E1859",
        heading: "#0F172A",
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
        gradient: "gradient 8s ease infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
