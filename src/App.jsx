import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Agents from "./pages/Agents";
import ImageGenerator from "./pages/ImageGenerator";
import VoiceSynthesis from "./pages/VoiceSynthesis";
import ChatGPTClone from "./pages/ChatGPTClone";
import Price from "./pages/Price";
import AiMarketplaceClone from "./components/AiMarketplaceClone.jsx";

function App() {
  // 👇 Scroll animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/voice-synthesis" element={<VoiceSynthesis />} />
        <Route path="/chatgpt-clone" element={<ChatGPTClone />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/aimarketplace" element={<AiMarketplaceClone />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
