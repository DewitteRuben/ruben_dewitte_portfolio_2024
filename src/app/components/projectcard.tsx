"use client";

import Link from "next/link";
import "./projectcard.css";
import { FaGithub } from "react-icons/fa";
import { MouseEventHandler } from "react";

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

  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <Tag
      className="flex flex-col justify-start bg-slate-100 dark:bg-slate-800 transition-colors rounded-xl p-8 relative project-card"
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
      <h3 className="text-l mt-2 mb-2.5 leading-7 font-medium">{title}</h3>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
      <a
        href={githubRepo}
        onClick={stopPropagation}
        target="_blank"
        className="absolute bottom-4 right-4"
      >
        <FaGithub
          fontSize={24}
          className="project-card-child hover:opacity-40"
        />
      </a>
    </Tag>
  );
};

export default ProjectCard;
