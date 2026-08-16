import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Interactive_Analytics_Dashboard/",
});
