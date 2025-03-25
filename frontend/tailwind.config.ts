import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        offwhitel: "#F2F0F1",
        offwhited: "#F0EEED",
        sortofblack: "#1b1b1b",
      },
      fontFamily: {
        satoshi: ["Satoshi-Variable", "sans-serif"],
        icf: ["FONTSPRING-DEMO-INTEGRALCF-BOLD.otf", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
