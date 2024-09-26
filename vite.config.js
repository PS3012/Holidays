import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/crystaltravels",
  server: {
    port: 5174,
    open: true,
  },
  esbuild: {
    loader: "jsx",
  },
});
