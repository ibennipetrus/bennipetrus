import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPalette,
  FaFolderOpen,
  FaCamera,
  FaInstagram,
  FaEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { BiSolidCameraHome } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const DockItem = ({
  IconComponent,
  path,
  isHovered,
  isNeighbor,
  onMouseEnter,
  onClick,
  external,
}) => {
  const scale = isHovered ? 2.5 : isNeighbor ? 2 : 1;
  const margin = isHovered || isNeighbor ? "28px" : "4px";

  const linkStyle = {
    transform: `scale(${scale})`,
    margin: `0 ${margin}`,
  };

  // Wenn kein path vorhanden ist (z.B. Mail-Icon), rendern wir ein div
  if (!path) {
    return (
      <div
        className="relative w-10 h-10 bg-[var(--dark-btn-bg)] border border-[var(--dark-card-border)] rounded-full flex justify-center items-center transition-all duration-[700ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] origin-bottom cursor-pointer"
        style={linkStyle}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-10 h-10 bg-[var(--dark-btn-bg)] border border-[var(--dark-card-border)] rounded-full flex justify-center items-center transition-all duration-[700ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] origin-bottom cursor-pointer"
      style={linkStyle}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {external ? (
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
          </div>
        </a>
      ) : (
        <Link to={path} onClick={(e) => e.stopPropagation()}>
          <div className="absolute inset-0 flex justify-center items-center">
            <IconComponent size="14px" style={{ color: "hsl(0, 0%, 50%)" }} />
          </div>
        </Link>
      )}
    </div>
  );
};

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoverEffectsEnabled, setHoverEffectsEnabled] = useState(
    window.innerWidth >= 900
  );

  useEffect(() => {
    const checkScreenSize = () => {
      const isEnabled = window.innerWidth >= 900;
      setHoverEffectsEnabled(isEnabled);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseEnter = (index) => {
    if (hoverEffectsEnabled) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (hoverEffectsEnabled) {
      setTimeout(() => {
        setHoveredIndex(-1);
      }, 50);
    }
  };

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const email = "bennipetrus1@gmail.com";
    const currentScroll = window.scrollY;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          toast.success("E-Mail-Adresse kopiert!");
          window.scrollTo(0, currentScroll);
        })
        .catch(() => toast.error("Fehler beim Kopieren."));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          toast.success("E-Mail-Adresse kopiert!");
          window.scrollTo(0, currentScroll);
        } else {
          toast.error("Fehler beim Kopieren.");
        }
      } catch {
        toast.error("Copy nicht unterstützt.");
      }

      document.body.removeChild(textArea);
    }
  };

  const icons = [
    { icon: FaHome, path: "/" },
    { icon: FaUserAlt, path: "/about" },
    { icon: FaPalette, path: "/work" },
    { icon: FaFolderOpen, path: "/projects" },
    {
      icon: BiSolidCameraHome,
      path: "https://www.bio.site/petrusbox",
      external: true,
    },
    {
      icon: FaInstagram,
      path: "https://www.instagram.com/bennipetrus/",
      external: true,
    },
    { icon: FaEnvelope, path: "/contact" },
  ];

  return (
    <>
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            background: "var(--dark-bg-color)",
            color: "var(--dark-text-color)",
            fontWeight: "600",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            padding: "14px 28px",
            fontFamily: "Urbanist",
            letterSpacing: "0.03em",
          },
          success: {
            iconTheme: {
              primary: "var(--color-gray-800)",
              secondary: "#fff",
            },
          },
          error: {
            style: { background: "#e74c3c", color: "#fff" },
            iconTheme: {
              primary: "#fff",
              secondary: "#e74c3c",
            },
          },
        }}
      />

      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-1 py-2 flex justify-center border border-[var(--dark-card-border)] rounded-full z-[1000000] bg-[var(--dark-bg-color)] cursor-pointer"
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-around mx-auto">
          {icons.map((item, index) => (
            <DockItem
              key={index}
              IconComponent={item.icon}
              path={item.path}
              isHovered={index === hoveredIndex}
              isNeighbor={
                hoveredIndex >= 0 && Math.abs(index - hoveredIndex) === 1
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={item.onClick}
              external={item.external}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dock;
