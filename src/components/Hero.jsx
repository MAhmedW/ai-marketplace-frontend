import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero-section text-center text-white py-5"
      style={{
        background: "radial-gradient(circle at top, #0dcaf0 0%, #000 100%)",
      }}
      data-aos="fade-up"
    >
      <div className="container py-5">
        <h1 className="display-3 fw-bold animate__animated animate__fadeInDown">
          Explore the Best AI Tools
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          Chatbots, AI Agents, Automations & More
        </p>
          <button className="btn btn-info btn-lg mt-4 animate__animated animate__zoomIn">
            Browse Marketplace
          </button>
      </div>
    </div>
  );
};
export default Hero;