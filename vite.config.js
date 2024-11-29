import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Ar/",
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "index-[hash].js",
        chunkFileNames: "index-[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
});
