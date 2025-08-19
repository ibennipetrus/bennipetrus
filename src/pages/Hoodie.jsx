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
            <h1>Wear Your Faith</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">– Creative Apparel for Teens</p>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="relative w-[90%] md:w-[60%] mx-auto rounded-2xl overflow-hidden border-0">
            <img
              src="/Hoodie/Entwurf3.png"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>Graphic Design – Apparel & Merchandise</p>
                <p>Branding – Youth Engagement</p>
                <p>Community Design – Faith-based Expression</p>
              </div>
              <div className="sp-date">
                <p>December 2024</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                For a small, fun initiative at my church, I designed a series of
                hoodies and t-shirts for our teen community. The goal was to
                create clothing that allows teens to express their faith in a
                casual, modern, and approachable way. This project combined
                creativity with community engagement, encouraging young members
                to proudly share their beliefs through everyday apparel.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/Entwurf2.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/Entwurf4.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Hoodie/Entwurf5.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Hoodie/Entwurf6.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Hoodie/Entwurf7.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Hoodie/Entwurf10.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Hoodie/Entwurf9.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Hoodie/Entwurf8.png"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Teens: Comfortable, stylish clothing that resonates with their
                interests and faith.
              </p>
              <p>
                Youth Leaders & Parents: Apparel that is meaningful and
                appropriate for all occasions.
              </p>
              <p>
                Purpose: To strengthen community identity and create tangible,
                fun ways for teens to celebrate and share their faith.
              </p>
            </div>
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ Teens wore and shared the apparel proudly within the
                community.
              </p>
              <p>
                ✅ Strengthened visibility of faith-focused initiatives in a
                creative, non-intrusive way.
              </p>
              <p>
                ✅ Provided a platform for expressing faith through everyday
                fashion.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/taufe1.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/taufe2.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/taufe3.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/taufe4.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/taufe5.jpg" className="w-full h-auto" />
          </div>
          <div className="col-span-1 rounded md:rounded-4xl overflow-hidden">
            <img src="/Hoodie/taufe6.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="credits">
          <div className="container">
            <h2>My Contribution</h2>

            <div className="credits-row">
              <div className="credits-col">
                <div className="credits-header">
                  <p>Design</p>
                </div>
                <div className="credits-copy">
                  <p>Created the visual designs for hoodies and t-shirts.</p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Overview</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Developed a cohesive style that balances faith, fun, and
                    teen appeal.
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
                  <p>Youth-focused Design</p>
                </div>
                <div className="credits-copy">
                  <p>Fresh, modern graphics that appeal to teen aesthetics.</p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Faith-forward Messaging</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Subtle yet meaningful references to faith and positivity.
                    Encourages teens to connect, share, and feel a sense of
                    belonging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Work);
