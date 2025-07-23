import React from "react";

const VoiceSynthesis = () => {
  return (
    <div className="container text-white py-5" data-aos="fade-up">
      <h1 className="text-center mb-4">🎙️ AI Voice Synthesis</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card tool-card bg-dark text-white shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Narration Voice</h5>
              <p className="card-text">Create podcast-style narration voices.</p>
              <button className="btn btn-outline-light">Generate</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card tool-card bg-dark text-white shadow-sm">
            <div className="card-body">
              <h5 className="card-title">AI Voiceover</h5>
              <p className="card-text">Create voiceovers for videos and games.</p>
              <button className="btn btn-outline-light">Try Voice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceSynthesis;
