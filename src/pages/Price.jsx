// src/pages/Price.jsx
import React from "react";
import "./Price.css"; // For hover shadows

const Price = () => {
  return (
    <div className="container py-5 text-white bg-dark min-vh-100 animate__animated animate__fadeIn">
      <h1 className="text-center mb-5 text-info animate__animated animate__fadeInDown display-5">
        💰 Pricing Plans
      </h1>

      <div className="row g-4">
        {/* AI Chatbot - Free */}
        <div className="col-md-6 col-lg-3 animate__animated animate__zoomIn">
          <div className="card custom-hover h-100 bg-secondary text-white shadow-lg border-light border-1">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">AI Chatbot</h5>
                <p className="card-text">Free forever</p>
                <ul className="list-unstyled">
                  <li>✔ Unlimited chats</li>
                  <li>✔ Basic support</li>
                </ul>
              </div>
              <button className="btn btn-success text-white fw-semibold mt-3 shadow">Free</button>
            </div>
          </div>
        </div>

        {/* AI Agent */}
        <div className="col-md-6 col-lg-3 animate__animated animate__zoomIn">
          <div className="card custom-hover h-100 bg-secondary text-white shadow-lg border-light border-1">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">AI Agent</h5>
                <p className="card-text">$19/month</p>
                <ul className="list-unstyled">
                  <li>✔ Custom workflows</li>
                  <li>✔ Automation tasks</li>
                  <li>✔ Priority support</li>
                </ul>
              </div>
              <button className="btn btn-primary text-white fw-semibold mt-3 shadow">Subscribe</button>
            </div>
          </div>
        </div>

        {/* AI Image Generator */}
        <div className="col-md-6 col-lg-3 animate__animated animate__zoomIn">
          <div className="card custom-hover h-100 bg-secondary text-white shadow-lg border-light border-1">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">AI Image Generator</h5>
                <p className="card-text">$9/month</p>
                <ul className="list-unstyled">
                  <li>✔ Unlimited generations</li>
                  <li>✔ HD quality</li>
                </ul>
              </div>
              <button className="btn btn-primary text-white fw-semibold mt-3 shadow">Subscribe</button>
            </div>
          </div>
        </div>

        {/* AI Voice Generator */}
        <div className="col-md-6 col-lg-3 animate__animated animate__zoomIn">
          <div className="card custom-hover h-100 bg-secondary text-white shadow-lg border-light border-1">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title fw-bold">AI Voice Generator</h5>
                <p className="card-text">$14/month</p>
                <ul className="list-unstyled">
                  <li>✔ Natural voices</li>
                  <li>✔ Multiple languages</li>
                </ul>
              </div>
              <button className="btn btn-primary text-white fw-semibold mt-3 shadow">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
