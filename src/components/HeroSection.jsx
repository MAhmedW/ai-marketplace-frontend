import React from 'react';

const HeroSection = () => (
  <div className="text-center py-5">
    <p className="text-muted">Explore models in <span className="text-success fw-bold">NLP</span></p>
    <h1 className="display-5 fw-bold">
      Making <span className="text-success">Secure & Private AI</span><br />Accessible for All
    </h1>
    <p className="mt-3 text-muted">
      Effortlessly integrate AI into your products by choosing from a diverse range of pre-trained AI models
    </p>
    <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
      {["Peking University", "Capgemini", "Cisco", "Microsoft", "Google", "Alibaba Cloud", "Cognizant"].map((brand, i) => (
        <div key={i} className="text-muted small">{brand}</div>
      ))}
    </div>
  </div>
);

export default HeroSection;
