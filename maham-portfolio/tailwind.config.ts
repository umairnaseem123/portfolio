import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#070B14", panel: "#0E1524", line: "#1C2A44", cyan: { DEFAULT: "#22D3EE", dim: "#0E7490" }, mist: "#8FA3C0" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
  } },
  plugins: [],
} satisfies Config;
