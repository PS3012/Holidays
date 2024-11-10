import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
  esbuild: {
    loader: "jsx",
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth"],
  },
});
