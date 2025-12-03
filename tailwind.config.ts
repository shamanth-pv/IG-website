import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Typing cursor movement
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        // Generic blink (transparent)
        blink: {
          "50%": { borderColor: "transparent" },
        },
        // Blink Blue (for Associations)
        "blink-blue": {
          "0%, 100%": { borderColor: "#1e88e5" },
          "50%": { borderColor: "transparent" },
        },
        // Blink Purple (for Clientele)
        "blink-purple": {
          "0%, 100%": { borderColor: "#9a4593" },
          "50%": { borderColor: "transparent" },
        },
        // Delayed typing helper (keeps text hidden until delay is over)
        "typing-delayed": {
          "0%": { width: "0%", opacity: "1" },
          "100%": { width: "100%", opacity: "1" },
        },
      },
      animation: {
        // Animation shortcuts
        "type-associations": "typing 1.5s steps(16, end) forwards, blink-blue .75s step-end infinite",
        "type-clientele": "typing 1.5s steps(13, end) forwards, blink-purple .75s step-end infinite",
        
        // About Section Animations
        "type-line-1": "typing 2s steps(22, end) forwards, blink .75s step-end infinite",
        "type-line-2": "typing-delayed 2s steps(20, end) 2s forwards, blink .75s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;