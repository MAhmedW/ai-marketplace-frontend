import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <span className="badge bg-dark text-white me-2">ai</span>
      <strong>marketplace</strong>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav gap-3">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#">Models</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#">Industry</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="#">Platform</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
    <a href="#" className="btn btn-teal text-white">Get Started</a>
  </nav>
);

export default Navbar;
