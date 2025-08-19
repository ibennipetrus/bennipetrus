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
            <h1>Unverschwendet</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – Sustainable Corporate Gifting Campaign
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
                src="/Unverschwendet/Unverschwendet.jpg"
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
                <p>Web Design & Landing Page Development</p>
                <p>CMS Management & Content Updates</p>
                <p>Paid Social Campaigns (Meta Ads)</p>
                <p>Digital Marketing Strategy</p>
              </div>
              <div className="sp-date">
                <p>October 2022</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                Unverschwendet (also known under the label Rettenswert in HOFER
                supermarkets) is one of Austria’s leading upcycling food
                companies, turning surplus produce into delicious and
                sustainable products. For their B2B business, I developed a
                dedicated corporate gifts landing page that allowed companies to
                easily discover and order customized gift packages. In addition,
                I supported the ongoing CMS management, ensuring that seasonal
                campaigns, product launches, and website updates were seamlessly
                integrated into their digital presence. To maximize reach and
                conversions, I also created and managed a paid social media
                campaign tailored to promote their corporate gift offerings
                during the high-demand gifting season.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 gap-2 md:gap-6">
          <div className=" rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Unverschwendet/unverschwendet1.jpg"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Unverschwendet/unverschwendet2.jpg"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Unverschwendet/unverschwendet3.jpg"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Unverschwendet/unverschwendet4.jpg"
              className="w-full h-auto"
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
                ✅ Strengthened Unverschwendet’s positioning as a sustainable
                and innovative brand
              </p>
              <p>
                ✅ Higher visibility and conversions for their corporate gifting
                offer
              </p>
              <p>
                ✅ Supported long-term brand partnerships and business
                relationships
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
                  <p>Web Design</p>
                </div>
                <div className="credits-copy">
                  <p>Landing page optimized for B2B corporate gifting</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Branding & Visual Design</p>
                </div>
                <div className="credits-copy">
                  <p>Clear storytelling around sustainability & impact</p>
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
                  <p>CMS updates for new products and campaigns</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Seamless content management to launch new products and
                    campaigns efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Social ads campaign</p>
                </div>
                <div className="credits-copy">
                  <p>
                    targeting businesses & HR decision makers and increased
                    awareness for sustainable corporate gifts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Neoh/Neoh1.jpg" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Neoh">
                <div className="next-project-title">
                  <h1>Neoh</h1>
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
