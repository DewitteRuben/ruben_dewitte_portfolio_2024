import "./projectcard.css";
import { FaGithub } from "react-icons/fa";

type TProjectCard = {
  title: string;
  src?: string;
  description: string;
  link?: string;
  githubRepo?: string;
};

const ProjectCard: React.FC<TProjectCard> = ({
  description,
  githubRepo,
  src,
  link,
  title,
}) => {
  return (
    <a
      className="flex flex-col justify-start bg-slate-100 transition-colors rounded-xl p-8 relative project-card"
      target="_blank"
      href={link}
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
    </a>
  );
};

export default ProjectCard;
