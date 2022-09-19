import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
  gitLink: string;
  className?: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div
      className={`flex flex-col gap-6 w-full items-center ${props.className}`}>
      <img
        src={props.image}
        alt={props.title}
        className="rounded-[5px] object-cover ring-[5px] ring-accent border-opacity-50"
      />
      <span className="font-semibold leading-6">{props.title}</span>
      <p className="text-subtitle text-xs leading-4 ">{props.description}</p>
      <div className="flex flex-row gap-4 w-full items-baseline">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 bg-accent rounded-[5px] font-semibold leading-4">
          Live demo
        </a>
        <a className="leading-4">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
