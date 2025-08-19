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
            <h1>Aimance</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – AI-Driven Insights into Company Attractiveness for Talent
            </p>
          </div>
        </section>

        <section className="sp-banner flex items-center justify-center py-10">
          <div className="relative w-[90%] md:w-[70%] h-[80vh]">
            {/* Overlay nur sichtbar wenn iframe noch nicht aktiv */}
            {!active && (
              <div
                className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl cursor-pointer z-10"
                onClick={() => setActive(true)}
              >
                <span className="text-white text-lg font-medium">
                  Click to interact
                </span>
              </div>
            )}
            <iframe
              src="https://www.aimance.com/"
              className="w-full h-full rounded-2xl shadow-lg border-0"
              title="Aimance Preview"
              style={{ pointerEvents: active ? "auto" : "none" }}
            ></iframe>
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>UX/UI Design – Website & Dashboard Interface</p>
                <p>
                  Visual Design – Branding and global comparison visualizations
                </p>
                <p>Motion Design – Animated pitch presentation</p>
                <p>Frontend Development – Interactive website integration</p>
                <p>
                  Freelance & Client Work – Concept to delivery for an AI SaaS
                  platform
                </p>
              </div>
              <div className="sp-date">
                <p>June 2025</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                Aimance.com is an AI-powered tool that shows companies exactly
                how attractive they are to potential job applicants in real
                time, with global comparisons. The project involved designing
                the full interface, dashboards, and visual components, all of
                which were animated in a pitch presentation to convey the
                interactive and real-time nature of the platform. The goal was
                to combine clean, modern UX/UI with engaging motion design that
                communicates the platform's intelligence and immediacy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 flex justify-center">
          <div className="relative w-[80%] h-[60vh] aspect-video rounded-2xl overflow-hidden border-0">
            <iframe
              src="https://player.vimeo.com/video/1110880539?autoplay=1&muted=1&loop=1&background=1"
              title="aimance-SalesPitch (1)"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                HR managers and recruiters looking to benchmark their employer
                attractiveness globally.
              </p>
              <p>
                Executives seeking actionable insights to improve talent
                acquisition strategies.
              </p>
              <p>
                Potential clients exploring AI-driven analytics for workforce
                planning.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Aimance/aimance1.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Aimance/aimance2.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Aimance/aimance3.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Aimance/aimance4.png" className="w-full h-auto" />
          </div>

          {/* Großes Bild */}
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Aimance/aimance8.png"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ A visually striking and intuitive dashboard design that
                communicates real-time insights.
              </p>
              <p>
                ✅ Animated pitch presentation that effectively showcases the
                AI’s capabilities.
              </p>
              <p>
                ✅ Positive client feedback for design clarity, engagement, and
                professional aesthetics.
              </p>
              <p>
                ✅ Fully prepared assets for web integration and marketing
                purposes.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/Aimance/aimance7.png" />
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
                    Designed the website and interactive dashboard interface for
                    real-time company insights.
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Motion & Presentation Design</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Created a fully animated pitch to showcase the design
                    concept and AI functionality.
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
                  <p>Interactive Dashboards:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Real-time metrics and global comparison views for company
                    attractiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Animated Pitch Presentation:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Motion design animations to clearly present AI-driven
                    insights and data storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Spotify/Slide24.jpg" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Spotify">
                <div className="next-project-title">
                  <h1>Spotify</h1>
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
