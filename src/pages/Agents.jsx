import React from "react";

const Agents = () => {
  return (
    <div className="container text-white py-5" data-aos="fade-up">
      <h1 className="text-center mb-4">🤖 AI Agents</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card tool-card bg-dark text-white shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Sales Assistant Bot</h5>
              <p className="card-text">Automate customer sales conversations.</p>
              <button className="btn btn-outline-light">Try Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card tool-card bg-dark text-white shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Support AI Agent</h5>
              <p className="card-text">24/7 customer support automation.</p>
              <button className="btn btn-outline-light">Use Agent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
