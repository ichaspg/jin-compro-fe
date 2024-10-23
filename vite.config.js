import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html",
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  resolve: {
    alias: {
      '@emailjs/browser': '/node_modules/@emailjs/browser/es/index.js',
    },
  },
  server: {
    historyApiFallback: true,
  },
});