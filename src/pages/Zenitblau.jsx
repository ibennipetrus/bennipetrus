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
            <h1>Zenitblau</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">– Newsletter & Blogkampagne</p>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="relative w-full max-w-[1200px] h-[35vh] md:h-[80vh] rounded-2xl overflow-hidden border-0">
            <img
              src="/Zenitblau/newsletter.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>CMS Development – Blog & Newsletter Management</p>
                <p>
                  Content Strategy – Social Media Promotion & Story Highlights
                </p>
                <p>
                  Digital Marketing – Campaign Execution & Engagement Tracking
                </p>
                <p>Visual & UI Design – Simple, reader-friendly layouts</p>
              </div>
              <div className="sp-date">
                <p>june 2021</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                For Zenitblau, I developed a newsletter campaign highlighting
                recent blog posts. This involved creating a dedicated CMS blog
                page to efficiently manage and publish content. The campaign was
                also promoted through Instagram Story Highlights, ensuring
                higher engagement and visibility. The goal was to streamline
                content distribution, increase subscriber interaction, and
                present Zenitblau’s insights in a structured and appealing way.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/googleads.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/googleads3.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/googleads2.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/googleads4.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Existing Subscribers: Ensure they receive timely updates and
                easily access new content.
              </p>
              <p>
                Social Media Users: Drive engagement through Instagram Story
                Highlights and targeted posts.
              </p>
              <p>
                Potential Clients & Readers: Showcase Zenitblau’s expertise and
                thought leadership in marketing.
              </p>
              <p>
                To provide a seamless system for managing, publishing, and
                promoting blog content while maximizing reach and engagement
                across multiple platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/marketing.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/webdesign.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>✅ CMS blog page for structured content management.</p>
              <p>
                ✅ Integrated newsletter campaigns delivering timely updates.
              </p>
              <p>
                ✅ Social media promotion via Story Highlights increased
                audience reach.
              </p>
              <p>✅ Consistent visual style reinforcing brand identity.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/marketing1.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Zenitblau/marketing2.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>CMS</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Developed the CMS blog page and structured content workflow.
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>automated distribution</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Created newsletter templates. Monitored engagement metrics
                    to optimize future campaigns.
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
                  <p>CMS Blog Page</p>
                </div>
                <div className="credits-copy">
                  <p>Easy management and publishing of articles.</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Newsletter Automation:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Scheduled email campaigns directly from the CMS Promotion of
                    new blog posts on Instagram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="next-project">
          <div className="next-project-img">
            <img src="/Hoodie/Entwurf3.png" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Hoodie">
                <div className="next-project-title">
                  <h1>Wear Your Faith</h1>
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
