import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Transition from "../components/Transition/Transition";
import BackButton from "../components/Backbutton/BackButton";

import { ReactLenis } from "@studio-freight/react-lenis";

import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  const [active, setActive] = useState(false);

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
            <h1>ZackZack</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – Prototype for an Independent Austrian News Platform
            </p>
          </div>
        </section>

        <section className="scroll-hold-section relative">
          <div className=" relative w-[90%] md:w-[60%] mx-auto rounded-2xl overflow-hidden shadow-lg">
            {/* Top Bar */}
            <div className="top-bar flex items-center space-x-2 p-2 z-20 relative">
              <span className="dot red w-3 h-3 rounded-full bg-red-500"></span>
              <span className="dot yellow w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="dot green w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            {/* Scrollbarer Bereich */}
            <div className="image-scroll-container relative h-[80vh] overflow-y-scroll">
              <img
                src="/Zackzack/Zackzack.jpg"
                alt="Langes Bild"
                className="scroll-image w-full rounded-b-2xl"
                style={{ minHeight: "150vh" }}
              />
            </div>
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>UX/UI Design – News & Media Platform</p>
                <p>Web Prototype – Interactive layouts & flows</p>
                <p>Information Architecture – Reader-first content structure</p>
                <p>
                  Branding & Visual Direction – Clean, modern news experience
                </p>
              </div>
              <div className="sp-date">
                <p>October 2022</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                For ZackZack, a well-known Austrian news outlet, I was tasked
                with developing a prototype that reimagines how investigative
                journalism can be consumed in a digital-first world. The goal
                was to design a reader-centric experience that balances
                credibility with accessibility, ensuring articles, opinions, and
                investigative features are easy to discover and engaging to
                read. The prototype introduces a modular homepage structure with
                flexible layouts for breaking news, featured articles, and
                in-depth investigations. The visual identity emphasizes
                transparency and independence with a bold yet minimal design
                language.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Engaged Readers: Users looking for transparent, independent
                reporting.
              </p>
              <p>
                Casual News Consumers: Quick access to breaking headlines in a
                simple layout.
              </p>
              <p>
                Investigative Enthusiasts: Deep dives into politics, economy,
                and society.
              </p>
              <p>
                Mobile-first Users: Optimized reading experience on smartphones
                and tablets.
              </p>
            </div>
          </div>
        </section>

        <section className="flex justify-center py-6 md:py-12">
          <div className="relative w-[80%] md:w-[40%] rounded-2xl overflow-hidden">
            <img
              src="/Zackzack/zackzacklogo.png"
              alt="ZackZack Prototype Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>✅ Clear information hierarchy for intuitive navigation.</p>
              <p>
                ✅ Responsive prototype tailored for both mobile and desktop
                audiences.
              </p>
              <p>
                ✅ Visual consistency that strengthens ZackZack’s independent
                brand identity.
              </p>
              <p>
                ✅ A flexible design system, making future content extensions
                easy.
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
                  <p>UX/UI Design</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Developed the UX flow for news consumption, from headline
                    scanning to deep article reading.
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>UI prototype</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Designed the UI prototype with modular layouts and strong
                    typographic hierarchy.
                  </p>
                </div>
              </div>

              <div className="credits-col">
                <div className="credits-header">
                  <p>gamified Elements</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Proposed gamified elements such as “reader engagement
                    badges” to foster community participation.
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Key Features</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Dynamic Homepage Layouts</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Flexible grid system that adapts to breaking news, featured
                    stories, and long-form investigations.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Reader Mode</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Distraction-free reading experience with optimized
                    typography and mobile-first layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Unverschwendet/Unverschwendet.jpg" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Unverschwendet">
                <div className="next-project-title">
                  <h1>Unverschwendet</h1>
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
