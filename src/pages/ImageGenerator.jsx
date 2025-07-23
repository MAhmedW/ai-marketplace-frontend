// src/pages/ImageGenerator.jsx
import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/image/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      } else {
        alert("Image generation failed");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Server error");
    }
  };

  return (
    <div className="container-fluid bg-dark text-white py-5 min-vh-100 animate__animated animate__fadeIn">
      <h2 className="text-center text-info mb-5 display-5 animate__animated animate__fadeInDown">
        🖼️ AI Image Generator
      </h2>

      <div className="row justify-content-center align-items-start g-5">
        {/* Left: Input Section */}
        <div className="col-md-5 animate__animated animate__fadeInLeft">
          <div className="bg-secondary p-4 rounded shadow">
            <label htmlFor="prompt" className="form-label fw-semibold">
              Describe your image:
            </label>
            <textarea
              id="prompt"
              className="form-control mb-3 bg-dark text-white border-light"
              rows="5"
              placeholder="e.g. A robot painting a portrait in space"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="btn btn-info w-100 fw-bold" onClick={handleGenerate}>
              🚀 Generate Image
            </button>
          </div>
        </div>

        {/* Right: Image Output */}
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <div className="bg-black p-4 rounded shadow text-center">
            <p className="text-muted mb-3">Generated Image:</p>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="AI generated"
                className="img-fluid rounded shadow-lg border border-light"
              />
            ) : (
              <div className="text-secondary">
                Your image will appear here after generation.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
