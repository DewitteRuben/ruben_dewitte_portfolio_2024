import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { getContent } from "../db/content";
import ProjectCard from "../components/projectcard";

export const metadata = {
  title: "Projects",
  description: "Apps I'm building, open-source work and earlier projects.",
};

const byNewest = (a: { metadata: { publishedAt: string } }, b: { metadata: { publishedAt: string } }) =>
  new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();

const year = (date: string) => date.slice(0, 4);

function SectionTitle({ children, note }: { children: React.ReactNode; note?: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-medium tracking-tight">{children}</h2>
      {note && <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{note}</p>}
    </div>
  );
}

export default function ProjectsPage() {
  const projects = getContent().sort(byNewest);
  const apps = projects.filter((p) => p.metadata.type === "app");
  const openSource = projects.filter((p) => p.metadata.type === "open-source");
  const earlier = projects.filter((p) => p.metadata.type === "personal");

  return (
    <section className="flex flex-col gap-14">
      <div>
        <h1 className="text-2xl font-medium tracking-tighter">projects</h1>
        <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
          The apps I'm building now, open-source work from my time at Record Evolution, and a few earlier projects.
        </p>
      </div>

      <div>
        <SectionTitle
          note={
            <>
              Made and run by me under{" "}
              <a className="link-underline" href="https://holoapps.rubendewitte.com" target="_blank" rel="noopener noreferrer">
                Holo Apps
              </a>
              .
            </>
          }
        >
          apps
        </SectionTitle>
        <div className="flex flex-col gap-3">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/project/${app.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
            >
              {app.metadata.icon && (
                <Image src={app.metadata.icon} alt="" width={56} height={56} className="h-14 w-14 rounded-xl" />
              )}
              <div className="min-w-0 flex-1">
                <p className="font-medium">{app.metadata.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {app.metadata.summary}
                </p>
              </div>
              <FaArrowRight aria-hidden className="shrink-0 text-sm text-neutral-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>open source</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {openSource.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.metadata.title}
              description={p.metadata.summary}
              link={p.metadata.link}
              src={p.metadata.imageSrc}
              githubRepo={p.metadata.githubRepo}
              year={year(p.metadata.publishedAt)}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>earlier projects</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {earlier.map((p) => (
            <ProjectCard
              key={p.slug}
              external={false}
              title={p.metadata.title}
              description={p.metadata.summary}
              link={`/project/${p.slug}`}
              src={p.metadata.imageSrc}
              githubRepo={p.metadata.githubRepo}
              year={year(p.metadata.publishedAt)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
