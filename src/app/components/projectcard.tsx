import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type TProjectCard = {
  title: string;
  src?: string;
  description: string;
  external?: boolean;
  link?: string;
  githubRepo?: string;
  year?: string;
};

const ProjectCard: React.FC<TProjectCard> = ({ description, githubRepo, external = true, src, link, title, year }) => {
  const Tag = external ? "a" : Link;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700">
      {src && (
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            fill
            sizes="(min-width: 640px) 320px, 100vw"
            alt=""
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            src={src}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-medium">
          <Tag
            href={link!}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="after:absolute after:inset-0"
          >
            {title}
          </Tag>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
        {(year || githubRepo) && (
          <div className="mt-auto flex items-center justify-between pt-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="tabular-nums">{year}</span>
            {githubRepo && (
              <a
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="relative z-10 hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <FaGithub fontSize={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
