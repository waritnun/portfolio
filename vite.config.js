import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT for GitHub Pages:
// If your repo is https://github.com/USERNAME/REPO
// set base: "/REPO/"
// If you're using USERNAME.github.io (root domain), set base: "/"
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
