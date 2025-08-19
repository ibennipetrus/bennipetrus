import React, { useState, useRef, useEffect } from "react";
import "./KAPPA.css";
import { Link } from "react-router-dom";

import VideoPlayer from "../../components/Videoplayer/VideoPlayer";
import Transition from "../../components/Transition/Transition";
import BackButton from "../../components/Backbutton/BackButton";

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

  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        // kleiner Threshold für schnelle Reaktion
        setClosed(true);
      } else {
        setClosed(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ReactLenis root>
      <div className="sample-project">
        <BackButton />

        <section className="sp-title">
          <div className="container">
            <h1>KAPPA Weinbau</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              - A Visual & Interactive Journey into Vineyards and Viticulture
              Tools
            </p>
          </div>
        </section>

        <div className={`browser-mockup ${closed ? "closed" : ""}`}>
          <div className="top-bar">
            <span className={`dot red ${closed ? "pressed" : ""}`}></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <VideoPlayer src="video/kappawebsite2.mp4" />
        </div>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>
                  UX/UI Design – Prototyping and interactive scroll-based
                  animations
                </p>
                <p>
                  Visual Design – Artistic vineyard illustrations and tool
                  visualizations
                </p>
                <p>
                  Motion Design – After Effects video showcasing the concept
                </p>
                <p>
                  Frontend Development – Built with Vite and integrated forms
                </p>
                <p>
                  Freelance & Client Work – Concept to execution for a niche
                  wine expert
                </p>
              </div>
              <div className="sp-date">
                <p>August 2021</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                This project aimed to create an immersive website experience for
                a wine expert specializing in "Rebenfelder" (vineyards). Using
                Adobe XD for prototyping, the design incorporated
                scroll-triggered animations where different sections activate
                background movements and reveal vineyard tools and equipment in
                a visually engaging way. Artistic illustrations of vineyard
                fields blended realism with artistic style, reinforcing the
                brand’s connection to nature and craftsmanship. To communicate
                the vision clearly, I produced a video in After Effects showing
                how the final licensed version could look and feel. The site was
                then developed on Vite, with integrated contact forms for easy
                user interaction.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-hold-section">
          <div className="browser-mockup2 !w-[90%] md:w-[70%] mx-auto">
            <div className="top-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <div className="image-scroll-container">
              <img
                src="/KAPPA/kappa-prototype.png"
                alt="Langes Bild"
                className="scroll-image w-full"
              />
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
                Wine growers and vineyard managers interested in modern tools
                and vineyard design.
              </p>
              <p>
                Potential customers exploring the expert’s offerings and
                vineyard innovations.
              </p>
              <p>
                Wine enthusiasts curious about the tools and techniques behind
                quality vineyard cultivation.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <img
            src="/KAPPA/weingut.png"
            alt=""
            className="invert brightness-100"
          />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ A visually compelling web experience that blends artistic
                vineyard visuals with functional product presentation.
              </p>
              <p>
                ✅ Positive client feedback on the scroll-based storytelling and
                the clarity provided by the motion concept video.
              </p>
              <p>
                ✅ Received positive feedback for both technical execution and
                artistic direction
              </p>
              <p>
                ✅ A modern, responsive website ready for licensing, user
                interaction, and future expansion.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <img src="/KAPPA/weinblättergruppe.png" alt="" />
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>
                    Led the UX/UI design, focusing on scroll interaction and
                    user engagement
                  </p>
                </div>
                <div className="credits-copy">
                  <p>
                    Designed the entire prototype in Adobe XD, iterating with
                    plugins to perfect scroll behavior
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>
                    Collaborated closely with the client to align visuals with
                    their expertise and branding
                  </p>
                </div>
                <div className="credits-copy">
                  <p>
                    Created original artistic drawings of vineyard fields,
                    adding a unique visual identity
                  </p>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Key Elements of the Event</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Scroll-Triggered Animations:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Backgrounds move and tools appear precisely as users scroll
                    through sections, creating a dynamic narrative flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Artistic Vineyard Illustrations:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Custom-drawn vineyard landscapes in a style that’s both
                    visual and artistic, highlighting the beauty of the craft.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Tool Visualization:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Detailed depictions of equipment the expert uses and sells,
                    bridging product presentation with storytelling.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>After Effects Video:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    A conceptual animation to pitch the interactive experience
                    and licensing possibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Vite-Powered Website:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    A fast, modern build with integrated contact forms, ensuring
                    smooth UX and client interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Cinematic Visuals:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Rendered visuals emphasize light, shadow, and fabric
                    interaction, with a minimalistic and high-fashion
                    atmosphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Aimance/aimance6.png" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Aimance">
                <div className="next-project-title">
                  <h1>Aimance</h1>
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
