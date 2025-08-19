import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import WorkImage1 from "/MarioKart/Ticket_mockup.png";
import WorkImage2 from "/JKU/JKU_Mockup2.png";
import WorkImage3 from "/BEEM/backjacket_96.png";
import WorkImage4 from "/KAPPA/kappa-prototype.png";
import WorkImage5 from "/Aimance/aimance1.png";
import WorkImage6 from "/Hoodie/Entwurf3.png";
import WorkImage7 from "/Unverschwendet/unverschwendet1.jpg";
import WorkImage8 from "/Neoh/creatives3.jpg";
import WorkImage9 from "/Rotax/rennsport.jpg";
import WorkImage10 from "/Zackzack/Zackzack.jpg";
import WorkImage11 from "/Spotify/Slide24.jpg";
import WorkImage12 from "/Absolutfliesen/image1.png";
import WorkImage13 from "/Zenitblau/newsletter.jpg";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".work-item", { y: 300, stagger: 0.025, opacity: 0 });
    },
    { scope: container }
  );

  // Kleine WorkItem-Komponente direkt hier integriert
  const WorkItem = ({
    imgUrl,
    containerHeight,
    workName,
    workDate,
    type,
    url,
    extraClass,
  }) => {
    return (
      <div
        className={`work-item relative border border-[var(--dark-card-border)] rounded-lg overflow-hidden mb-2 p-1 ${
          extraClass || ""
        }`}
      >
        <div className="relative">
          <div
            className="w-full overflow-hidden rounded-lg"
            style={{ height: `${containerHeight}px` }}
          >
            <img
              src={imgUrl}
              alt={workName}
              className="w-full h-full object-cover scale-110 "
            />
          </div>

          <div className="absolute bottom-0 w-full flex justify-between px-4 py-2">
            <p className="text-[0.8rem] text-[var(--dark-text-color)]">
              {workName}
            </p>
            <p className="text-[0.8rem] text-[var(--dark-text-tertiary)]">
              {workDate}
            </p>
          </div>
        </div>

        {type === "project" && (
          <div className="mt-2">
            <Link to={url}>
              <button className="text-sm px-3 py-1 border border-[var(--dark-card-border)] rounded-md hover:bg-[var(--dark-card-bg)] transition">
                View Project
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      ref={container}
      className="mx-auto py-2 px-2 w-full flex flex-col md:flex-row gap-2 mb-40"
    >
      {/* Column 1 */}
      <div className="flex-1">
        <WorkItem
          imgUrl={WorkImage1}
          containerHeight={300}
          workName="Mario Kart"
          workDate="August 2021"
          type="project"
          url="/Mariokart"
        />
        <WorkItem
          imgUrl={WorkImage2}
          containerHeight={200}
          workName="JKU Project"
          workDate="July 2023"
          type="project"
          url="/JKU"
        />
        <WorkItem
          imgUrl={WorkImage3}
          containerHeight={350}
          workName="BEEM"
          workDate="March 2021"
          type="project"
          url="/BEEM"
        />
        <WorkItem
          imgUrl={WorkImage4}
          containerHeight={325}
          workName="KAPPA Weinbau"
          workDate="August 2021"
          type="project"
          url="/KAPPA"
        />
        <WorkItem
          imgUrl={WorkImage10}
          containerHeight={200}
          workName="ZackZack"
          workDate="October 2022"
          type="project"
          url="/Zackzack"
        />
      </div>

      {/* Column 2 */}
      <div className="flex-1">
        <WorkItem
          imgUrl={WorkImage5}
          containerHeight={350}
          workName="Aimance"
          workDate="June 2025"
          type="project"
          url="/Aimance"
        />
        <WorkItem
          imgUrl={WorkImage6}
          containerHeight={350}
          workName="Wear Your Faith"
          workDate="December 2024"
          type="project"
          url="/Hoodie"
        />
        <WorkItem
          imgUrl={WorkImage7}
          containerHeight={300}
          workName="Unverschwendet"
          workDate="October 2022"
          type="project"
          url="/Unverschwendet"
        />
        <WorkItem
          imgUrl={WorkImage9}
          containerHeight={450}
          workName="Rotax BRP"
          workDate="February 2021"
          type="project"
          url="/Rotax"
        />
      </div>

      {/* Column 3 */}
      <div className="flex-1">
        <WorkItem
          imgUrl={WorkImage8}
          containerHeight={300}
          workName="Neoh"
          workDate="April 2025"
          type="project"
          url="/Neoh"
        />
        <WorkItem
          imgUrl={WorkImage11}
          containerHeight={400}
          workName="Spotify Vibes Unlimited"
          workDate="May 2025"
          type="project"
          url="/Spotify"
        />
        <WorkItem
          imgUrl={WorkImage12}
          containerHeight={350}
          workName="Absolutfliesen"
          workDate="September 2023"
          type="project"
          url="/Absolutfliesen"
        />
        <WorkItem
          imgUrl={WorkImage13}
          containerHeight={400}
          workName="Zenitblau"
          workDate="june 2021"
          type="project"
          url="/Zenitblau"
          extraClass="mb-[250px] md:mb-2"
        />
      </div>
    </div>
  );
};

export default Work;
