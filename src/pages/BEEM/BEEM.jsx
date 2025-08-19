import React, { useState, useEffect } from "react";
import "./BEEM.css";
import { Link } from "react-router-dom";

import BackButton from "../../components/Backbutton/BackButton";
import Transition from "../../components/Transition/Transition";
import VideoPlayer from "../../components/Videoplayer/VideoPlayer";

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
            <h1>Digital Fashion Experiment</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – A 3D Clothing Project in Collaboration with FH Hagenberg
            </p>
          </div>
        </section>

        <section className="sp-banner">
          <VideoPlayer src="/video/FASHIONRUNWAY_UNIPROJEKT_Petrus_Csoarba.mp4" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>3D Fashion Design – Garment creation using CLO Standalone</p>
                <p>
                  Virtual Runway Animation – Cinematic presentation of fashion
                  in motion
                </p>
                <p>
                  3D Modeling & Environment Design – Custom-built runway in
                  Autodesk Maya
                </p>
                <p>
                  Creative Direction & Conceptual Design – Innovative approach
                  to bodyless garmentsy
                </p>
                <p>
                  Material & Texture Exploration – Experimenting with fabric
                  behavior and visual identity
                </p>
                <p>
                  Academic Collaboration – Project in cooperation with FH
                  Hagenberg
                </p>
              </div>
              <div className="sp-date">
                <p>March 2021</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                This experimental fashion project focused on designing three
                digital outfits using CLO Standalone, with the goal of exploring
                the fusion of technology and fashion. Each outfit was fully sewn
                digitally and animated in a 3D runway show, where the garments
                float and move without visible bodies, creating an ethereal,
                surreal visual language. The concept emphasized the autonomy of
                clothing, drawing attention to materiality, movement, and
                digital craft.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <img src="/BEEM/backjacket_96.png" alt="" />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Digital Fashion Enthusiasts & Designers – Showcasing the
                potential of CLO 3D for innovative design.
              </p>
              <p>
                Academic & Creative Collaborators – Demonstrating the
                intersection of technology, design, and animation.
              </p>
              <p>
                Motion Designers & 3D Artists – Exploring new angles, animation
                styles, and spatial storytelling.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-3 gap-2 md:gap-6">
          {[
            {
              blur: "/BEEM/3D_outifts_effect_1.png",
              clear: "/BEEM/3D_outifts_1.png",
            },
            {
              blur: "/BEEM/3D_outifts_effect_2.png",
              clear: "/BEEM/3D_outifts_2.png",
            },
            {
              blur: "/BEEM/3D_outifts_effect_3.png",
              clear: "/BEEM/3D_outifts_3.png",
            },
          ].map((img, index) => (
            <div
              key={index}
              className="relative group col-span-1 rounded md:rounded-4xl overflow-hidden cursor-pointer"
            >
              {/* Klare Version */}
              <img
                src={img.clear}
                alt={`Outfit clear ${index + 1}`}
                className="w-full h-auto object-cover"
              />

              {/* Blur Overlay */}
              <img
                src={img.blur}
                alt={`Outfit blurred ${index + 1}`}
                className={`
          w-full h-auto object-cover absolute top-0 left-0
          transition-opacity duration-300 ease-in-out
          opacity-100 group-hover:opacity-0

          /* Animation auf Mobile */
          mobile-animate-blur-${index + 1}
        `}
              />
              <div className="absolute inset-0 items-center justify-center pointer-events-none opacity-70 group-hover:opacity-0 transition-opacity duration-300 text-white text-lg font-semibold bg-black/20 hidden md:flex">
                Hover me
              </div>
            </div>
          ))}
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ Successfully showcased at FH Hagenberg as part of a creative
                technology collaboration
              </p>
              <p>✅ Pushed boundaries of virtual fashion and 3D animation</p>
              <p>
                ✅ Received positive feedback for both technical execution and
                artistic direction
              </p>
              <p>
                ✅ Expanded skills in fashion technology, 3D environments, and
                creative storytelling
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 grid-rows-3 gap-2 md:gap-6 ">
          <div className="col-span-2 rounded md:rounded-2xl overflow-hidden">
            <img src="/BEEM/outfit1_45.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-2xl overflow-hidden w-full h-full">
            <img src="/BEEM/outfit2_36.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-2xl overflow-hidden w-full h-full">
            <img src="/BEEM/outfit3_171.png" className="w-full h-auto" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img
              src="/BEEM/outfit3_Colorway A_29.png"
              className="w-full h-auto"
            />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Garment sewing and simulation in CLO</p>
                </div>
                <div className="credits-copy">
                  <p>Texture and material testing</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Runway and set design in Maya</p>
                </div>
                <div className="credits-copy">
                  <p>Artistic concept and visual identity</p>
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
                  <p>Custom Tickets:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Each player received a personalized ticket, linked to their
                    own virtual Mario Kart character, adding a unique touch.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Garment Design in CLO:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Three complete outfits designed and sewn digitally,
                    experimenting with silhouette and construction.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>3D Runway Cinematic:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    A custom runway built in Autodesk Maya, filmed with dynamic
                    camera angles for a striking visual narrative.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Material & Texture Experimentation:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Each outfit tested different fabrics, weights, and sewing
                    techniques to simulate realistic movement.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Floating Outfits Concept:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Instead of using avatars, the garments are bodyless,
                    enhancing focus on form, animation, and design.
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
            <img src="/KAPPA/kappa-prototype.png" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/KAPPA">
                <div className="next-project-title">
                  <h1>KAPPA Weinbau</h1>
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
