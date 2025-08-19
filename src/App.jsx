import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dock from "./components/Dock/Dock.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Work from "./pages/Work.jsx";
import Mariokart from "./pages/Mariokart.jsx";
import JKU from "./pages/JKU.jsx";
import BEEM from "./pages/BEEM/BEEM.jsx";
import KAPPA from "./pages/KAPPA/KAPPA.jsx";
import Aimance from "./pages/Aimance.jsx";
import Spotify from "./pages/Spotify.jsx";
import Absolutfliesen from "./pages/Absolutfliesen.jsx";
import Rotax from "./pages/Rotax.jsx";
import Zackzack from "./pages/Zackzack.jsx";
import Unverschwendet from "./pages/Unverschwendet.jsx";
import Neoh from "./pages/Neoh.jsx";
import Zenitblau from "./pages/Zenitblau.jsx";
import Hoodie from "./pages/Hoodie.jsx";

export default function App() {
  return (
    <>
      <Dock />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/mariokart" element={<Mariokart />} />
        <Route path="/jku" element={<JKU />} />
        <Route path="/BEEM" element={<BEEM />} />
        <Route path="/KAPPA" element={<KAPPA />} />
        <Route path="/Aimance" element={<Aimance />} />
        <Route path="/Spotify" element={<Spotify />} />
        <Route path="/Absolutfliesen" element={<Absolutfliesen />} />
        <Route path="/Rotax" element={<Rotax />} />
        <Route path="/Zackzack" element={<Zackzack />} />
        <Route path="/Unverschwendet" element={<Unverschwendet />} />
        <Route path="/Neoh" element={<Neoh />} />
        <Route path="/Zenitblau" element={<Zenitblau />} />
        <Route path="/Hoodie" element={<Hoodie />} />
        {/* Weitere Routen hier hinzufügen */}
      </Routes>
    </>
  );
}
