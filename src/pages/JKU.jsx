import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Transition from "../components/Transition/Transition";
import BackButton from "../components/Backbutton/BackButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <ReactLenis root>
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1> Journey of an International</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – A Project for JKU - Visual Storytelling for International
              Students & Employees
            </p>
          </div>
        </section>

        <section className="h-[40vh] md:h-[70vh]">
          <img src="/JKU/JKU_Mockup2.png" alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="p-details-name">Categories</p>

              <div className="sp-tags">
                <p>
                  Graphic Design – Visualizing complex processes in an engaging
                  way
                </p>
                <p>
                  Information Design – Structuring key information for clarity
                </p>
                <p>
                  UX/UI & User Journey Mapping – Creating an intuitive flow for
                  the target audience
                </p>
                <p>
                  Brand Communication – Aligning with JKU’s identity and tone
                </p>
              </div>
              <div className="sp-date">
                <p>July 2023</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                This project was my first freelance project, and it was a full
                success for the client! I developed a visual journey for
                Johannes Kepler University Linz (JKU) to help international
                students and employees navigate their way through the
                application, enrollment, and relocation process. The goal was to
                provide a clear, structured, and engaging way to present
                essential information.
              </p>
            </div>
          </div>
        </section>

        <section className="h-max">
          <div className="w-full md:w-3/4 mx-auto py-1 px-1 md:py-8 md:px-8">
            <img src="/JKU/JKU_Mockup1.png" alt="" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                The Journey of an International was designed to guide
                international students through the application, enrollment, and
                relocation process, ensuring a smooth transition to studying in
                Austria. It also provides essential information for
                international employees, helping them navigate their first steps
                at JKU. The journey covers key milestones, from initial interest
                and application to bureaucratic processes, visa and housing
                preparations, and finally, settling into student life in Linz
                with access to university services, public transport, and social
                events.
              </p>
            </div>
          </div>
        </section>

        <section className="h-max">
          <div className="w-full md:w-3/4 mx-auto py-8 px-8">
            <img src="/JKU/JKU_Mockup3.png" alt="" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅My first freelance project – and a great success for the
                client!
              </p>
              <p>
                ✅ The Journey of an International was presented at an
                international conference and is now a key orientation tool for
                future international students and employees at JKU.
              </p>
              <p>
                ✅ The client was extremely satisfied, and the project received
                positive feedback from the target audience.
              </p>
            </div>
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Concept & structure of the journey</p>
                </div>
                <div className="credits-copy">
                  <p> Visual design of each step</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>
                    Collaboration with JKU & the International Welcome Center
                    (IWC)
                  </p>
                </div>
                <div className="credits-copy">
                  <p>Information curation for different target groups</p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>The Journey of an International Student</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Interest & Application:</p>
                </div>
                <div className="credits-copy">
                  <p>How do I apply to JKU?</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Waiting & Bureaucracy:</p>
                </div>
                <div className="credits-copy">
                  <p>What happens after my application?</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Preparation:</p>
                </div>
                <div className="credits-copy">
                  <p>Housing, insurance, visa – what do I need to do?</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Enrollment & Residence Permit:</p>
                </div>
                <div className="credits-copy">
                  <p>What documents are required?</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Student Life in Linz:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    University services, public transport, and social events.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-copy">
                  <p>
                    Each step was visually designed to simplify the process and
                    provide a structured roadmap for international students and
                    employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="BEEM/backjacket_96.png" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/BEEM">
                <div className="next-project-title">
                  <h1>BEEM</h1>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
