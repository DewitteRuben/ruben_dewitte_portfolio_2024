import Link from "next/link";
import { Suspense } from "react";
import { getContent } from "../db/content";

export const metadata = {
  title: "Projects",
  description:
    "Read my write-ups on software development, personal projects, and more",
};

export default function BlogPage() {
  const allBlogs = getContent(["personal-projects"]);

  console.log(allBlogs);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">writing</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/writing/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
                <span className="block text-slate-500 dark:text-neutral-400 font-normal text-sm mt-2">
                  Published on {post.metadata.publishedAt}
                </span>
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
