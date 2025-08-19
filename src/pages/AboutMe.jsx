import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";

// Icons im public-Folder ablegen
const iconsArray = [
  "/public/Aboutme/Icon1.png",
  "/public/Aboutme/Icon2.png",
  "/public/Aboutme/Icon3.png",
  "/public/Aboutme/Icon4.png",
  "/public/Aboutme/Icon5.png",
];

const skills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "After Effects",
  "Premiere Pro",
  "Final Cut Pro",
  "Cinema 4D",
  "Maya",
  "Blender",
  "Unity",
  "Figma",
  "FigJam",
  "Sketch",
  "Webflow",
  "Wix",
  "WordPress",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue.js",
  "PHP",
  "Java",
  "LottieFiles",
  "DaVinci Resolve",
  "Logic Pro X",
  "Ableton Live",
  "Procreate",
  "Hubspot",
  "Notion",
  "Slack",
  "Trello",
  "Asana",
];

const projects = [
  "Social Media Kampagne für Startups",
  "Branding & Corporate Design für KMUs",
  "Interaktive Websites mit React & GSAP",
  "Full Custom Design & Video Projekte für Kunden",
  "User Experience Optimierung für E-Commerce",
  "Motion Graphics & Animationen für Kampagnen",
];

const cvTimeline = [
  {
    title: "Self-Employed – Marketing & Design Agency",
    date: "2020 – Heute",
    description:
      "Branding, Webdesign, Visual Identities, Client Management, Project Planning",
  },
  {
    title: "Zenitblau – Graphic Designer & Web Developer",
    date: "2021 – 2022",
    description:
      "Web & Marketing Material Design, Frontend Collaboration, Animations & Layouts",
  },
  {
    title: "Photo Booth Company – Founder & Operator",
    date: "2023 – Heute",
    description:
      "Deployment of booths, Branding, Client Bookings, Equipment & Workflow Integration",
  },
];

const education = [
  {
    school: "University of Applied Sciences Upper Austria",
    degree: "Bachelor's Degree in Media Technology & Design",
    date: "Graduated 2021",
  },
  {
    school: "FHWien – University of Applied Sciences of WKW",
    degree: "Bachelor's Degree in Marketing & Sales",
  },
];

const languages = [
  { language: "German", level: "C2" },
  { language: "English", level: "C2" },
];

const hobbies = [
  "Chess (online rapid rating 1850)",
  "Fitness (completed a full marathon 2024)",
  "Sports enthusiast (exploring new sports; played competitive football in Austria's fourth division)",
];

const AboutMe = () => {
  const buttonRef = useRef(null);
  const fillRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = fillRef.current;
    const icon = iconRef.current;

    const hoverAnimation = gsap
      .timeline({ paused: true })
      .to(fill, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        icon,
        {
          color: "#000000",
          duration: 0.2,
          ease: "power2.out",
        },
        0
      );

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      hoverAnimation.kill();
    };
  }, []);

  const scrollToCV = () => {
    const cvSection = document.getElementById("cv-section");
    if (cvSection) {
      cvSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ReactLenis root>
      <section className="relative w-full min-h-screen p-8 flex items-center justify-center bg-[#141414] text-[#e3e3db] overflow-hidden">
        <div className="flex flex-col items-center">
          <h1 className="animated-text relative text-center font-extrabold leading-[1.2] max-w-full sm:max-w-[90%] md:max-w-[70%]">
            <div className="inline-block w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 align-middle">
              <img
                src={iconsArray[0]}
                alt="icon1"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              Started designing
            </span>

            <div className="inline-block w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 align-middle">
              <img
                src={iconsArray[1]}
                alt="icon2"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              coding at twelve.
            </span>

            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              Turned freelancing
            </span>
            <div className="inline-block w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 align-middle">
              <img
                src={iconsArray[2]}
                alt="icon3"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              into constant creation.
            </span>

            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              Studied Media Design & Technology
            </span>
            <div className="inline-block w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 align-middle">
              <img
                src={iconsArray[3]}
                alt="icon4"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              Marketing & Sales.
            </span>

            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              Fluent with tools
            </span>
            <div className="inline-block w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 align-middle">
              <img
                src={iconsArray[4]}
                alt="icon5"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              from Adobe to React,
            </span>
            <span className="inline-block mx-2 text-[0.9rem] sm:text-[1.5rem] md:text-[3rem] lg:text-[4rem]">
              Final Cut to Cinema 4D
            </span>
          </h1>

          <div
            className="mt-20 mb-20 w-52 h-16 border border-gray-400 rounded-full flex justify-center items-center cursor-pointer relative"
            ref={buttonRef}
            onClick={scrollToCV}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-white rounded-full [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_0%_100%)]"
              ref={fillRef}
              style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center text-white font-bold whitespace-nowrap text-lg hover:text-black"
              ref={iconRef}
            >
              To the CV
            </div>
          </div>
        </div>
      </section>

      <section
        id="cv-section"
        className=" text-white  py-16 px-6 md:px-16 max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Curriculum Vitae</h2>
          <p className="text-xl text-gray-300">
            Benjamin Petrus – Medien & Kommunikationsdesigner | Web Developer |
            Marketing
          </p>
        </div>

        {/* Summary */}
        <div className="border border-gray-400 p-6 rounded-xl mb-12 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Summary</h3>
          <p>
            Creative Designer with strong foundations in product design,
            user-centered thinking, and end-to-end digital experiences.
            Experienced in fast-paced startups and B2C platforms. Passionate
            about solving real user problems through design, motion graphics,
            and web development.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="border border-gray-400 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Experience</h3>
          <div className="space-y-8">
            {cvTimeline.map((item, i) => (
              <div key={i}>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-400 mb-2">{item.date}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <ul>
            {education.map((edu, i) => (
              <li key={i} className="mb-4">
                <h4 className="text-xl font-bold">{edu.school}</h4>
                <p className="text-gray-400">{edu.degree}</p>
                {edu.date && <p className="text-gray-500">{edu.date}</p>}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <li
                key={i}
                className="border border-gray-400 p-4 rounded-xl shadow-lg hover:bg-gray-600 transition transform cursor-pointer"
              >
                {project}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Languages</h3>
            <ul>
              {languages.map((lang, i) => (
                <li key={i}>
                  {lang.language} – {lang.level}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Drivers Licence</h3>
            <p>Category B</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hobbies</h3>
            <ul>
              {hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-20">
          <a
            href="/Aboutme/CV_Petrus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition"
          >
            📄 Download CV
          </a>
        </div>
      </section>
    </ReactLenis>
  );
};

export default AboutMe;
