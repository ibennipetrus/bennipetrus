import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import BackButton from "../components/Backbutton/BackButton";
import Transition from "../components/Transition/Transition";
import VideoPlayer from "../components/Videoplayer/VideoPlayer"; // "p" klein

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
            <h1>Mario Kart Tournament</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – Event Design & Branding - Racing-Themed Experience with
              Customization & Interactive Design
            </p>
          </div>
        </section>

        <section className="sp-banner">
          <img src="/MarioKart/Ticket_mockup2.png" alt="" />
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>
                  Graphic Design – Creating event-specific visual assets and
                  branding
                </p>
                <p>
                  Event Design – Immersive theming and decoration for a fully
                  branded experience
                </p>
                <p>
                  UX/UI Design – Custom digital tickets and interactive elements
                  for players
                </p>
                <p>
                  Brand Communication – Aligning the design to Mario Kart's
                  aesthetic and energy
                </p>
                <p>
                  Project Management – Organizing and executing a large-scale
                  event experience
                </p>
                <p>
                  Freelance & Client Work – Delivering a unique, fun-filled
                  experience from concept to execution
                </p>
              </div>
              <div className="sp-date">
                <p>August 2021</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                This event was a custom-designed Mario Kart tournament, complete
                with personalized tickets, a virtual character system, and
                themed decorations. Each participant received a custom driver's
                license, and the venue was fully immersed in the Mario Kart
                universe, with design elements reflecting the iconic game. It
                was an exciting, interactive experience that drew participants
                into the action, making them feel like they were truly a part of
                the game.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <VideoPlayer src="/video/BBRL YOUTH KART.mp4" />
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Gamers and Mario Kart Fans – Engaging in a interactive
                tournament experience.
              </p>
              <p>
                Event Attendees – Immersing participants in a fun and
                competitive atmosphere with personalized touches.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 grid-rows-3 gap-2 md:gap-6 ">
          <div className="row-span-3 aspect-[9/16] rounded md:rounded-4xl overflow-hidden">
            <VideoPlayer src="/video/story_1.mp4" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden aspect-video">
            <img src="/MarioKart/führerschein.png" className="w-full h-auto" />
          </div>
          <div className="aspect-video rounded md:rounded-4xl overflow-hidden w-full h-full">
            <VideoPlayer src="/video/rotplatz1.mp4" />
          </div>
          <div className="aspect-video rounded md:rounded-4xl overflow-hidden w-full h-full">
            <VideoPlayer src="/video/mainsiegeranimation.mp4" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/MarioKart/Kartticket.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ A fun and immersive event that successfully blended graphic
                design with interactive elements, leaving a memorable impression
                on participants.
              </p>
              <p>
                ✅ The custom-designed tickets and driver's licenses were a hit,
                with participants commenting on how personalized and exciting
                the experience was.
              </p>
              <p>
                ✅ The event space decorations were praised for capturing the
                vibrant, action-packed feel of the Mario Kart game.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <VideoPlayer src="/video/5 bracket 1.mp4" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Conceptualizing the event’s visual theme and branding</p>
                </div>
                <div className="credits-copy">
                  <p>Designing the custom tickets and driver's licenses</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>
                    Coordinating the event’s immersive design and decorations
                  </p>
                </div>
                <div className="credits-copy">
                  <p>
                    Managing the interactive, virtual character system for each
                    player
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
                  <p>Driver's Licenses:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Every participant got a custom Mario Kart driver's license,
                    reinforcing the theme and enhancing the immersive
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Themed Venue Decorations:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    The event space was fully decked out in Mario Kart visuals,
                    from checkered flags to iconic game symbols.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Interactive Design:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Participants interacted with custom-designed virtual
                    characters and had a sense of being part of the Mario Kart
                    universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/JKU/JKU_Mockup2.png" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/JKU">
                <div className="next-project-title">
                  <h1>Journey of an International</h1>
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
