import Link from "next/link";
import { getContent } from "../db/content";
import ProjectCard from "../components/projectcard";

export const metadata = {
  title: "Projects",
  description:
    "Read my write-ups on software development, personal projects, and more",
};

export default function BlogPage() {
  const personalProjects = getContent(["personal-projects"]);
  const openSourceProjects = getContent(["opensource-projects"]);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here, you'll find a range of professional and hobby projects I've
          worked on over the years.
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-5 tracking-tighter">
          Open source
        </h2>
      </div>
      <div className="grid gap-4 min-[600px]:grid-cols-2 grid-cols-1">
        {openSourceProjects
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <ProjectCard
              key={post.metadata.title}
              description={post.metadata.summary}
              title={post.metadata.title}
              link={post.metadata.link}
              src={post.metadata.imageSrc}
              githubRepo={post.metadata.githubRepo}
            />
          ))}
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-5 tracking-tighter">Personal</h2>
      </div>
      <div className="grid gap-4 min-[600px]:grid-cols-2 grid-cols-1">
        {personalProjects
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <ProjectCard
              external={false}
              key={post.metadata.title}
              description={post.metadata.summary}
              title={post.metadata.title}
              link={`/project/${post.slug}`}
              src={post.metadata.imageSrc}
              githubRepo={post.metadata.githubRepo}
            />
          ))}
      </div>
    </section>
  );
}
