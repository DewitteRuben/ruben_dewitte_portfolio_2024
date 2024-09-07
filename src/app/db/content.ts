import fs from "fs";
import path from "path";
import getReadingTime from "reading-time";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";

type Metadata = {
  title: string;
  publishedAt: string;
  imageSrc?: string;
  link?: string;
  githubRepo?: string;
  summary: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

// function extractTweetIds(content) {
//   let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
//   return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
// }

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    const textOnPage = fromMarkdown(content);
    const readingTime = getReadingTime(toString(textOnPage));

    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      readingTime,
      content,
    };
  });
}

export function getContent(paths: string[]) {
  return getMDXData(path.join(process.cwd(), "content", ...paths));
}
