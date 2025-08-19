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
            <h1>NEOH</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">– Marketing Campaign Pitch</p>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="relative w-[90%] md:w-[60%] mx-auto rounded-2xl overflow-hidden border-0">
            <img src="/Neoh/Neoh1.jpg" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>Content Creation</p>
                <p>Community Engagement</p>
                <p>Collaborations</p>
                <p>Digital Integration</p>
                <p>Video Ads</p>
              </div>
              <div className="sp-date">
                <p>April 2025</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                As part of a university project, we developed a multi-faceted
                marketing campaign for NEOH, a brand known for its innovative
                low-sugar chocolate bars. Our goal was to expand NEOH’s reach in
                the UK and Germany through creative, targeted campaigns that
                resonate with different audience segments.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Neoh/creatives1.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Neoh/creatives2.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Neoh/creatives3.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Neoh/creatives4.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Campaign Concepts</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Chocolate Lovers: “Savor the Sweetness, Skip the Guilt” →
                Treasure Hunt Activation in major cities (London, Manchester,
                Berlin, Hamburg) with interactive clues, QR codes, co-branding
                with local restaurants, and exclusive product rewards.
              </p>
              <p>
                Parents: “Kids Love It, Parents Trust It” → Family Fun Days with
                engaging offline events, activities, and product sampling to
                strengthen brand trust and family appeal.
              </p>
              <p>
                Sports Enthusiasts: “Fuel Your Fitness, Not Your Sugar Rush” →
                Urban Fitness Challenge in partnership with local gyms, parks,
                and influencers — combined with sampling, branded activations,
                and online competitions.
              </p>
              <p>
                Diet-Conscious Individuals: “Delicious Decisions for Every Diet”
                → Health & Fitness Challenge with Strava integration, including
                progress tracking, digital rewards, and a community-driven
                online hub that links participants directly to the NEOH webshop.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1110987913?autoplay=1&muted=1&loop=1&background=1"
              title="NEOH"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
            <iframe
              src="ttps://player.vimeo.com/video/1110988468?autoplay=1&muted=1&loop=1&background=1"
              title="NEOH-Bianca"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1110987957?autoplay=1&muted=1&loop=1&background=1"
              title="NEOH-Viktoria"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1110990418?autoplay=1&muted=1&loop=1&background=1"
              title="NEOH-David"
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
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                The campaign concept positioned NEOH as a lifestyle brand beyond
                snacking — connecting with chocolate lovers, parents, athletes,
                and health-conscious individuals through both offline
                experiences and digital activation. The strategy highlighted
                community, fun, and fitness while directly driving traffic to
                the webshop.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/Neoh/contract.png" />
          </div>
        </section>

        <section className="sp-img">
          <div className="container">
            <img src="/Neoh/Neoh2.jpg" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Campaign concept & strategy development</p>
                </div>
                <div className="credits-copy">
                  <p>Creative direction for videos and ads</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Social media content ideas & hashtag strategy</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Digital integration concepts (QR codes, webshop flows,
                    Strava challenges)
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
                  <p>Targeting</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Multi-target audience approach with tailored activations
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>offline experiences and digital engagement</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Strong focus on community-driven participation. Engaging
                    video ads and creatives to support visibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Zenitblau/newsletter.jpg" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Zenitblau">
                <div className="next-project-title">
                  <h1>Zenitblau</h1>
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
