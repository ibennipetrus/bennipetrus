import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import gsap from "gsap";

const BackButton = () => {
  const buttonRef = useRef(null);
  const fillRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = fillRef.current;
    const icon = iconRef.current;

    const hoverAnimation = gsap
      .timeline({ paused: true })
      .to(fill, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        icon,
        {
          color: "#000000",
          duration: 0.2,
          ease: "power2.out",
        },
        0
      );

    const handleMouseEnter = () => {
      hoverAnimation.play();
    };

    const handleMouseLeave = () => {
      hoverAnimation.reverse();
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      hoverAnimation.kill();
    };
  }, []);

  return (
    <div
      className=" fixed -top-[25px] -left-[25px] w-[120px] h-[120px] border border-white/25 rounded-full flex justify-center items-center z-20"
      ref={buttonRef}
    >
      <Link to="/projects">
        <div
          className="absolute top-0 left-0 w-full h-full bg-white rounded-full [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_0%_100%)]"
          ref={fillRef}
          style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center text-white"
          ref={iconRef}
        >
          <IoMdArrowBack size={26} />
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
