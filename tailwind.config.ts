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
        'custom-gradient': 'linear-gradient(90deg, #efd5ff 0%, #515ada 100%)',
      },
      colors: {
        linkWater: '#e5ecf7',
        tuna: '#303039',
        amethystSmoke: '#9290b9',
        deluge: '#7b64a0',
        makara: '#887a6b',
        lightWisteria: '#b69ade',
        moonRaker: '#cabcf1',
        pigeonPost: '#b5b7e0',
        shakespeare: '#58a4cd',
        nobel: '#b5b0ae',
      },
    },
  },
  plugins: [],
};
export default config;
