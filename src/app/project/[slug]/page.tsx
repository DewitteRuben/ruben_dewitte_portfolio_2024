import type { Metadata } from "next";
import { Suspense, cache } from "react";
import fs from "fs";
import { unstable_noStore as noStore } from "next/cache";
import { CONTENT_PATH, getContentBySlug } from "@/app/db/content";
import {
  createHeading,
  RoundedImage,
  CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  Code,
  Table,
} from "@/app/components/mdx";
import PhotoSwipeGallery from "@/app/components/photoswipe";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/app/utils";

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  PhotoSwipeGallery,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  code: Code,
  Table,
};

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  let post = getContentBySlug(params.slug)

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.data;

  let ogImage = image
    ? `https://rubendewitte.com${image}`
    : `https://rubendewitte.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://rubendewitte.com/writing/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return fs
    .readdirSync(CONTENT_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
}

export default function Blog({ params }: any) {
  const { content, data } = getContentBySlug(params.slug);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: data.title,
            datePublished: data.publishedAt,
            dateModified: data.publishedAt,
            description: data.summary,
            image: data.image
              ? `https://rubendewitte.com${data.image}`
              : `https://rubendewitte.com/og?title=${data.title}`,
            url: `https://rubendewitte.com/writing/${params.slug}`,
            author: {
              "@type": "Person",
              name: "Ruben Dewitte",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {data.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(data.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <MDXRemote source={content} components={components} />
      </article>
    </section>
  );
}
