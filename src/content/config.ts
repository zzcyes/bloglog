import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  // 定义集合的 schema 或者其他配置
  schema: z.object({
    title: z.string(), // `title` 是必填字段，类型为字符串
    date: z.string(), // `date` 是必填字段，类型为日期
  }),
});

export const collections = {
  notes: notesCollection,
};
