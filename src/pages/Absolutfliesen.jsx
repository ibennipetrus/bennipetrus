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
            <h1>Absolutfliesen</h1>
            <div className="spacer"></div>
            <p className="sp-details-name">
              – Interactive 3D Showroom & Custom Tile Configuration
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
                src="/Absolutfliesen/image5.png"
                alt="Langes Bild"
                className="scroll-image w-full rounded-b-2xl"
                style={{ minHeight: "150vh" }}
              />
            </div>
          </div>

          {/* Mittiger Button außerhalb des scrollbaren Containers */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <a
              href="https://xd.adobe.com/view/b4b84526-30f2-4f58-9794-d1ad2ab21802-e1eb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black transition pointer-events-auto"
            >
              View Prototype
            </a>
          </div>
        </section>

        <section className="sp-details">
          <div className="container">
            <div className="sp-details-col">
              <p className="sp-details-name">Categories</p>

              <div className="sp-tags">
                <p>UX/UI Design – Interactive 3D Website & Showroom</p>
                <p>Visual Design – Branding, Logo, Guidelines, Mockups</p>
                <p>
                  Frontend Development – 3D Integration & Interactive Catalogn
                </p>
                <p>Client Project – Custom Tile Showroom Solution</p>
              </div>
              <div className="sp-date">
                <p>September 2023</p>
              </div>
            </div>

            <div className="sp-details-col">
              <p>Project Overview</p>
              <p>
                I created an interactive showroom prototype for a tile company,
                allowing users to explore 3D models of kitchens, bathrooms, and
                other spaces with fully customizable tiles. The project also
                includes a comprehensive tile catalog with stock info, detailed
                product specifications, and a "Mix & Match" feature to compare
                tiles side by side. Additionally, branding, logo guidelines, and
                mockups were developed, including applying the logo to buildings
                and surfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-2 gap-2 md:gap-6">
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/image1.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/image3.png" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/image4.png" className="w-full h-auto" />
          </div>
          <div className="col-span-2 rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/image2.png" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Target Audiences & Purpose</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                Interior designers and architects exploring tile options for
                client projects.
              </p>
              <p>
                Homeowners looking to visualize and customize tile layouts in 3D
                before purchase.
              </p>
              <p>
                Retail staff using the interactive catalog to showcase available
                products and stock info.
              </p>
              <p>
                Marketing and branding teams needing assets and guidelines for
                consistent application of the logo and visual identity.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/mockup1.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/mockup2.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/mockup3.jpg" className="w-full h-auto" />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img src="/Absolutfliesen/mockup4.jpg" className="w-full h-auto" />
          </div>
        </section>

        <section className="sp-info">
          <div className="container">
            <div className="sp-info-title">
              <h3>Outcome & Success</h3>
            </div>

            <div className="sp-info-desc">
              <p>
                ✅ Fully interactive 3D showroom prototype enabling realistic
                visualization of tile designs.
              </p>
              <p>
                ✅ Complete tile catalog with stock availability,
                specifications, and mix & match comparison functionality.
              </p>
              <p>
                ✅ Branding and logo guidelines implemented in mockups and
                real-life applications on buildings.
              </p>
              <p>
                ✅ Positive feedback from the client on usability, visual
                clarity, and professional presentation.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Absolutfliesen/guidelines1.jpg"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Absolutfliesen/guidelines2.jpg"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Absolutfliesen/guidelines3.jpg"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded md:rounded-4xl overflow-hidden">
            <img
              src="/Absolutfliesen/guidelines4.jpg"
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
                  <p>UX/UI Design</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Designed the interactive 3D showroom interface and tile
                    catalog for an intuitive user experience.
                  </p>
                </div>
              </div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Branding & Visual Design</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Developed logo guidelines, visual identity assets, and
                    mockups for real-life application on buildings.
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
                  <p>Interactive 3D Showroom:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Users can explore and customize tile layouts in realistic 3D
                    models of kitchens, bathrooms, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="credits-row">
              <div className="credits-col"></div>
              <div className="credits-col">
                <div className="credits-header">
                  <p>Tile Catalog & Mix & Match:</p>
                </div>
                <div className="credits-copy">
                  <p>
                    Full product catalog with stock info and the ability to
                    compare tiles side by side for better decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project">
          <div className="next-project-img">
            <img src="/Rotax/rennsport.jpg" alt="" />
          </div>

          <div className="absolute inset-0 bg-black/75" />

          <div className="container">
            <div className="next-project-header">
              <div className="next-project-icon">
                <h1>
                  <IoMdArrowForward />
                </h1>
              </div>
              <Link to="/Rotax">
                <div className="next-project-title">
                  <h1>Rotax BRP</h1>
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
