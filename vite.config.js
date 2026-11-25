import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Keep the port CRA used so existing bookmarks and docs still work.
    port: 3000,
  },
  build: {
    // Keep CRA's output folder so existing hosting config keeps working.
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
    css: false,
  },
});
