// @ts-check
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/homepage",
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
    ],
    remarkPlugins: [remarkGfm, [remarkToc, { heading: "目录" }]],
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
});
