import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html",
      external: ['@emailjs/browser', 'react-toastify']
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  resolve: {
    alias: {
      '@emailjs/browser': '/node_modules/@emailjs/browser/es/index.js',
      'react-toastify': '/node_modules/react-toastify/dist/react-toastify.esm.js'
    },
  },
  server: {
    historyApiFallback: true,
  },
});