import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image': "url('/landing-image.webp')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#201F22",
      white: "#F5F5F5",
      gray: {
        500: "#EEEAEA",
        700: "#3A393E",
      },
      red: {
        500: "#FF453A",
      },
      yellow: {
        500: "#C1FD35",
      }
    }
  },
  fontSize: {
    'base': '16px',
    'sm': '14px',
    'md': '18px',
    'lg': '20px',
    'xl': '24px',
    '2xl': '32px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '64px',
    '6xl': '72px',
  },
  plugins: [],
};

export default config;
