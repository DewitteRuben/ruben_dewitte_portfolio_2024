import Link from "next/link";
import "./projectcard.css";
import { FaGithub } from "react-icons/fa";

type TProjectCard = {
  title: string;
  src?: string;
  description: string;
  external?: boolean;
  link?: string;
  githubRepo?: string;
};

const ProjectCard: React.FC<TProjectCard> = ({
  description,
  githubRepo,
  external = true,
  src,
  link,
  title,
}) => {
  const Tag = external ? `a` : Link;
  return (
    <Tag
      className="flex flex-col justify-start bg-slate-100 transition-colors rounded-xl p-8 relative project-card"
      target={external ? "_blank" : undefined}
      href={link!}
    >
      {src && (
        <div className="relative rounded-xl mb-4 shadow-project">
          <img
            loading="lazy"
            decoding="async"
            data-nimg="1"
            className="rounded-xl bg-cover min-h-[180px]"
            src={src}
          />
        </div>
      )}
      <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
        {title}
      </h3>
      <h3 className="text-slate-500 text-base">{description}</h3>
      <a href={githubRepo} target="_blank">
        <FaGithub
          fontSize={24}
          className="project-card-child absolute bottom-4 right-4 hover:opacity-40"
        />
      </a>
    </Tag>
  );
};

export default ProjectCard;
