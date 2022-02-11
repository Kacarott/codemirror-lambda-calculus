import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/codemirror-lambda-calculus" : "",
  css: { postcss },
}));
