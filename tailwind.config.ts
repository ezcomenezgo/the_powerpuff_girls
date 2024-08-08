/*
 * @Author:Claire Li
 * @Date:2024-08-06 21:07:07
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-08 22:32:28
 * @Description: Tailwind config
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: ["forest"]
  }
};
export default config;
