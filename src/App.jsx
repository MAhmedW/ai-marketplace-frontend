import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
