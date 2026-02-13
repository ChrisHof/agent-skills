import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: true,
      outDir: "./build/vite",
      rollupOptions: {
        external: ["react", "react-dom", /^(?!@clayui\/css)@clayui.*$/],
        input: "./src/",
      },
    },
    css: {
      transformer: "lightningcss",
    },
    plugins: [react()],
  };
});
