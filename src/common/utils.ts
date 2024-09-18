import { Astro } from "astro";

export function getFilename(filePath) {
  // 获取文件名（包含扩展名）
  const fileNameWithExt = filePath.split("/").pop();
  // 获取文件名（不包含扩展名）
  const fileNameWithoutExt = fileNameWithExt.split(".").slice(0, -1).join(".");
  return fileNameWithoutExt;
}

export function normalizePost(post) {
  return {
    ...post,
    id: getFilename(post.file),
    title: post.frontmatter.title,
    date: post.frontmatter.date,
  };
}

function compareDate(a, b) {
  return -new Date(a.date).valueOf() + new Date(b.date).valueOf();
}

export function normalizePosts(posts) {
  if (!posts?.length) return [];
  return posts.map(normalizePost).sort(compareDate);
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const numberOfWords = content.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}
