import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Wenn du auf GitHub Pages unter https://<user>.github.io/<repo>/ deployst:
  // base: '/<repo-name>/',
});
