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
            <h1>Spotify Vibes Unlimited</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – Enhanced Music Experience through Community & Gamification
            </p>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="relative w-full max-w-[1200px] h-[35vh] md:h-[80vh] rounded-2xl overflow-hidden border-0">
            <iframe
              src="https://player.vimeo.com/video/1110897663?autoplay=1&muted=1&loop=1&background=1"
              title="Animation1"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>UX/UI Design – Web & Mobile Interface</p>
                <p>Gamification & Loyalty Program Design</p>
                <p>Motion Design – Animated pitch presentation</p>
                <p>Frontend Development – Interactive web features</p>
                <p>Concept & Strategy – Music engagement innovation</p>
              </div>
              <div className="sp-date">
                <p>May 2025</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                Spotify Vibes Unlimited is a community-driven loyalty program
                that transforms passive listeners into active fans. It leverages
                exclusive experiences, gamification elements, and personal
                interaction with artists to deepen emotional engagement. The
                platform creates a personalized journey that turns music
                consumption into an immersive, shareable, and interactive
                experience.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-1 md:col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide10.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide12.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide14.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide16.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Spotify/Slide18.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="flex justify-center py-6 md:py-16">
          <div className="relative w-[90%] md:w-[80%] h-[35vh] md:h-[60vh] rounded-2xl overflow-hidden border-0">
            <iframe
              src="https://player.vimeo.com/video/1110897634?autoplay=1&muted=1&loop=1&background=1"
              title="Trendsetter"
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
                Trendsetters: Early adopters of new music, active on social
                media, motivated by status & rewards.
              </p>
              <p>
                Superfans: Deep connection to favorite artists, seeking
                exclusive events & personal interaction.
              </p>
              <p>
                Community Enthusiasts: Engaged in discussions and events,
                motivated by collective experiences.
              </p>
              <p>
                Gamification Fans: Motivated by challenges, points, and
                redeemable rewards.
              </p>
              <p>
                Purpose: Strengthen emotional engagement, increase interaction
                and user-generated content, and enhance subscription adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide19.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide22.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide23.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Spotify/Slide26.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ New monetization paths through upselling Free Users to
                Premium tiers.
              </p>
              <p>
                ✅ Interactive brand partnerships & experience-driven
                advertising.
              </p>
              <p>
                ✅ Enhanced artist growth via exclusive fan interactions and new
                revenue streams.
              </p>
              <p>
                ✅ Data insights enable better recommendations and strategic
                decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/Spotify/Slide24.jpg" />
          </div>
        </section>

        <section className="flex justify-center py-6 md:py-16">
          <div className="relative w-[90%] md:w-[80%] h-[35vh] md:h-[60vh] rounded-2xl overflow-hidden border-0">
            <iframe
              src="https://player.vimeo.com/video/1110897615?autoplay=1&muted=1&loop=1&background=1"
              title="CallToAction"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
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
                  <p>UX/UI & Gamification Design</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Community & Event Design</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Developed gamification mechanics, point systems, and
                    level-up features to drive engagement.
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
                    Personalized insights and reward tracking for each user
                    segment.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Exclusive Experiences:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Secret sessions, artist interactions, and community-driven
                    events to enhance emotional engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Absolutfliesen/image1.png" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Absolutfliesen">
                <div className="next-project-title">
                  <h1>Absolutfliesen</h1>
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
