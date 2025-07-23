// src/pages/AllTools.jsx
import React from "react";
import { Link } from "react-router-dom";

const AllTools = () => {
  return (
    <div className="bg-dark text-white min-vh-100 py-5 animate__animated animate__fadeIn">
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="text-center text-info mb-5 animate__animated animate__fadeInDown display-5">
          🧰 All AI Tools
        </h1>

        {/* AI Agents Section */}
        <div className="mb-5 animate__animated animate__fadeInLeft">
          <h2 className="text-center text-warning mb-4">🤖 AI Agents</h2>
          <div className="card bg-secondary text-white shadow-lg">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Smart Task Agent</h5>
              <p className="card-text">Automate repetitive tasks with AI.</p>
              <Link
                to="/agents"
                className="btn btn-primary text-white fw-semibold shadow"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>

        {/* Image Generator Section */}
        <div className="mb-5 animate__animated animate__fadeInRight">
          <h2 className="text-center text-warning mb-4">🖼️ AI Image Generator</h2>
          <div className="card bg-secondary text-white shadow-lg">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">DreamImage Creator</h5>
              <p className="card-text">Generate stunning images from text prompts.</p>
              <Link
                to="/image-generator"
                className="btn btn-primary text-white fw-semibold shadow"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>

        {/* Voice Synthesis Section */}
        <div className="mb-5 animate__animated animate__fadeInUp">
          <h2 className="text-center text-warning mb-4">🎙️ AI Voice Synthesis</h2>
          <div className="card bg-secondary text-white shadow-lg">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">VoiceMaster</h5>
              <p className="card-text">Create lifelike AI-generated voiceovers.</p>
              <Link
                to="/voice-synthesis"
                className="btn btn-primary text-white fw-semibold shadow"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTools;
