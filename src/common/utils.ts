export function getFilename(filePath: string) {
  // 获取文件名（包含扩展名）
  const fileNameWithExt = filePath.split("/").pop();
  // 获取文件名（不包含扩展名）
  const fileNameWithoutExt = fileNameWithExt.split(".").slice(0, -1).join(".");
  return fileNameWithoutExt;
}

export function normalizePost(post: any) {
  return {
    ...post,
    // id: getFilename(post.file),
    // title: post.frontmatter.title,
    // date: post.frontmatter.date,
  };
}

function compareDate(a: any, b: any) {
  return -new Date(a.date).valueOf() + new Date(b.date).valueOf();
}

export function normalizePosts(posts: any[]) {
  if (!posts?.length) return [];
  return posts.map(normalizePost).sort(compareDate);
}

export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const numberOfWords = content.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

export function getAssetPath(path: string) {
  const base = import.meta.env.BASE_URL || "";
  return `${base}${path}`;
}

export function getBaseUrl() {
  return import.meta.env.BASE_URL || "";
}

export function normalizeAssets(assets: any, key: string = "src") {
  return assets.map((asset: any) => {
    return {
      ...asset,
      [key]: getAssetPath(asset[key]),
    };
  });
}
