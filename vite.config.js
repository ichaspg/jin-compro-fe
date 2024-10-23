import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "index.html",
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/]
    }
  },
  optimizeDeps: {
    include: ['@emailjs/browser', 'react-toastify']
  },
  server: {
    historyApiFallback: true,
  },
});