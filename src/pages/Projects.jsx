import React from "react";
import { Link } from "react-router-dom";
import { useScramble } from "use-scramble";

const useMultipleScrambles = (projects) => {
  return projects.map((project) => {
    const { ref: titleRef } = useScramble({
      text: project.title,
      speed: 1000,
    });
    const { ref: copyRef } = useScramble({
      text: project.copy,
      speed: 1000,
    });
    return { ...project, titleRef, copyRef };
  });
};

const Projects = () => {
  const projectData = [
    {
      title: "Mario Kart",
      path: "/Mariokart",
      copy: "Crafting engaging visuals for web",
      year: "2021",
    },
    {
      title: "Journey of an International – JKU Project",
      path: "/JKU",
      copy: "Visual Storytelling for International Students & Employees",
      year: "2023",
    },
    {
      title: "BEEM - Digital Fashion Experiment",
      path: "/BEEM",
      copy: "3D Clothing Project with FH Hagenberg",
      year: "2021",
    },
    {
      title: "KAPPA Weinbau",
      path: "/KAPPA",
      copy: "Interactive Web Experience for a Wine Expert",
      year: "2021",
    },
    {
      title: "Aimance",
      path: "/Aimance",
      copy: "AI-Driven Insights",
      year: "2025",
    },
    {
      title: "Spotify",
      path: "/Spotify",
      copy: "Vibes Unlimited",
      year: "2025",
    },
    {
      title: "Absolutfliesen",
      path: "/Absolutfliesen",
      copy: "Interactive 3D Showroom",
      year: "2023",
    },
    {
      title: "Rotax BRP",
      path: "/Rotax",
      copy: "100 Years of Motorsport",
      year: "2021",
    },
    {
      title: "ZackZack",
      path: "/Zackzack",
      copy: "Prototype for  Austrian News Platform",
      year: "2022",
    },
    {
      title: "Unverschwendet",
      path: "/Unverschwendet",
      copy: "Sustainable Corporate Gifting Campaign",
      year: "2022",
    },
    {
      title: "Neoh",
      path: "/Neoh",
      copy: "Marketing Campaign Pitch",
      year: "2025",
    },
    {
      title: "Zenitblau",
      path: "/Zenitblau",
      copy: "Marketing Campaign Pitch",
      year: "2021",
    },
    {
      title: "Wear Your Faith",
      path: "/Hoodie",
      copy: "Creative Apparel for Teens",
      year: "2024",
    },
  ];

  const scrambledProjects = useMultipleScrambles(projectData);

  return (
    <div className="w-full md:w-3/4 mx-auto px-4 py-4 md:py-40">
      {scrambledProjects.map((project, index) => (
        <Link to={project.path} key={index}>
          <div className="relative w-full flex items-center p-4 rounded-lg gap-2 overflow-hidden cursor-pointer hover:bg-[var(--dark-card-bg)]">
            {/* Title */}
            <div className="shrink-0">
              <p ref={project.titleRef}>{project.title}</p>
            </div>

            {/* Copy (hidden unter 900px) */}
            <div className="shrink-0 max-[900px]:hidden">
              <p
                ref={project.copyRef}
                className="!text-[var(--dark-text-tertiary)]"
              >
                {project.copy}
              </p>
            </div>

            {/* Divider */}
            <div className="grow h-[1px] !bg-[var(--dark-card-border)] mx-2"></div>

            {/* Year */}
            <div className="shrink-0">
              <p>{project.year}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
