import fs from "fs";
import path from "path";
import getReadingTime from "reading-time";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";
import matter from "gray-matter";

type Metadata = {
  title: string;
  publishedAt: string;
  type: string;
  imageSrc?: string;
  link?: string;
  githubRepo?: string;
  summary: string;
  image?: string;
};

export const CONTENT_PATH = path.join(process.cwd(), "content")

export function getContent() {
  const mdxFiles = fs.readdirSync(CONTENT_PATH).filter((file) => path.extname(file) === ".mdx")

  return mdxFiles.map((file) => {
    const slug = path.basename(file, path.extname(file));
    const { content, data } = getContentBySlug(slug)
    const textOnPage = fromMarkdown(content);
    const readingTime = getReadingTime(toString(textOnPage));

    return {
      metadata: data as Metadata,
      slug,
      readingTime,
      content,
    };
  });
}

export const getContentBySlug = (slug: string) => {
  const postFilePath = path.join(CONTENT_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, "utf8");

  const { content, data } = matter(source);

  return {
    content, data
  };
};