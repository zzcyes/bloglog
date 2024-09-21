// @ts-nocheck
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";

const { BASE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  base: BASE_URL,
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      langs: [
        "typescript",
        "javascript",
        "jsx",
        "tsx",
        "vue",
        "html",
        "css",
        "json",
        "yaml",
        "markdown",
        "bash",
      ],
      wrap: true,
      transformers: [],
    },
  },
  build: {
    assetsInlineLimit: 10 * 1024, // 10KB
  },
});
