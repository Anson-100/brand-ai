/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFADD",
        khaki: "#C8B6A6",
        "desert-brown": "#8D7B68",
        cashew: "#3C2A21",
        navy: "#141E46",
        "muted-navy": "#213555",
        "logo-purple": "#5200a6",
        cyberspace: "#182747",
        cyberblack: "#191717",
        "shock-pink": "#DA0C81",
        "true-pink": "#FF4B91",
        "neon-purple": "#B931FC",
        "retro-purple": "#5D12D2",
      },
      dark: {
        cyberblack: "#191717",
        cyberspace: "#232D3F",
        cyberblue: "#176B87",
        "shock-pink": "#DA0C81",
        "true-pink": "#FF4B91",
        "neon-purple": "#B931FC",
        "retro-purple": "#5D12D2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
