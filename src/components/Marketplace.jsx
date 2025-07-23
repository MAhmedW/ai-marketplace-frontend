import React from "react";
import { Link } from "react-router-dom";

const tools = [
  { title: "ChatGPT Clone", desc: "Smart conversational agent", color: "#ffcb05", link: "/chatgpt-clone" },
  { title: "Image Generator", desc: "Generate AI images", color: "#ff7eb9", link: "/image-generator" },
  { title: "Voice Synthesis", desc: "Turn text into voice", color: "#74c0fc", link: "/voice-synthesis" },
];

const Marketplace = () => {
  return (
    <div className="container my-5" data-aos="fade-up">
      <h2 className="text-center mb-5 text-white fw-bold display-5 animate__animated animate__fadeInDown">
        🌟 Top AI Tools
      </h2>
      <div className="row">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-lg border-0 animate__animated animate__fadeInUp tool-card"
              style={{ background: tool.color, transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold text-dark">{tool.title}</h5>
                  <p className="card-text text-dark">{tool.desc}</p>
                </div>
                <div className="mt-3">
                  <Link to={tool.link} className="btn btn-dark w-100">
                    Try Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
