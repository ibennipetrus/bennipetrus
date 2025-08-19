import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import VideoPlayer from "../components/Videoplayer/VideoPlayer";
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
            <h1>Rotax BRP</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">– 100 Years of Motorsport</p>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="relative w-full max-w-[1200px] h-[35vh] md:h-[80vh] rounded-2xl overflow-hidden border-0">
            <img
              src="/Rotax/rennsport.jpg"
              alt="Rotax 100 Years of Motorsport"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>Website CMS Updates</p>
                <p>Video Production – Rotax MAX Dome Shooting Day</p>
                <p>Social Media & Google Ads Campaigns</p>
                <p>Concept & Strategy – 100 Year Motorsport Celebration</p>
              </div>
              <div className="sp-date">
                <p>February 2021</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                Rotax BRP celebrated 100 years of motorsport by updating their
                website CMS, producing videos for social and ads, and preparing
                social media and Google Ads campaigns. The project highlights
                their racing legacy while engaging the global motorsport
                community.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-1 md:col-span-2 rounded md:rounded-4xl overflow-hidden">
            <VideoPlayer src="/Rotax/2019.mp4" />
          </div>
          <div className="col-span-1 md:col-span-2 rounded md:rounded-4xl overflow-hidden">
            <VideoPlayer src="/Rotax/100years.mp4" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Motorsport enthusiasts: Fans of Rotax and karting worldwide.
              </p>
              <p>
                History lovers: Interested in 100-year racing legacy content.
              </p>
              <p>
                Social media audience: Engaged via posts, videos, and campaigns.
              </p>
              <p>
                Purpose: Celebrate 100 years of motorsport, drive engagement,
                and showcase Rotax’s achievements through web, video, and social
                channels.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-3 gap-2 md:gap-6">
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Rotax/ad1.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Rotax/ad2.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Rotax/ad3.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>✅ Full website CMS updated with anniversary content.</p>
              <p>✅ Videoads produced during Rotax MAX Dome shooting day.</p>
              <p>
                ✅ Social media and Google Ads campaigns prepared for
                deployment.
              </p>
              <p>
                ✅ Positive feedback from internal stakeholders and community
                engagement boosted.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-img py-6 md:py-12">
          <div className="container w-full sm:w-[90%] md:w-[50%] mx-auto rounded-2xl overflow-hidden">
            <VideoPlayer src="/Rotax/rotaxm1.mp4" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>CMS Updates & Content</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Updated text, images, layouts, and media assets across the
                    website.
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Video Production</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Directed and coordinated a video shooting day, producing
                    videoads for social and Google Ads.
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
                  <p>Social & Ads Campaigns</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Prepared posts and video content for social media and Google
                    Ads to maximize audience engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Professional videoads</p>
                </div>
                <div className="credits-copy">
                  <p>shot during the Rotax MAX Dome shooting day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Zackzack/Zackzack.jpg" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/zackzack">
                <div className="next-project-title">
                  <h1>ZackZack</h1>
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
