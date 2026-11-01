import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
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
      url: `https://rubendewitte.com/project/${params.slug}`,
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
            url: `https://rubendewitte.com/project/${params.slug}`,
            author: {
              "@type": "Person",
              name: "Ruben Dewitte",
            },
          }),
        }}
      />
      <div className="mb-10 flex items-center gap-4">
        {data.icon && (
          <Image src={data.icon} alt="" width={56} height={56} className="h-14 w-14 rounded-xl" />
        )}
        <div>
          <h1 className="title text-2xl font-medium tracking-tighter">{data.title}</h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {data.type === "app" ? `${data.publishedAt.slice(0, 4)} — now` : data.publishedAt.slice(0, 4)}
          </p>
        </div>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <MDXRemote source={content} components={components} />
      </article>
    </section>
  );
}
