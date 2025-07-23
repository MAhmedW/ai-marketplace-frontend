import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold text-info" to="/">
          🤖 AI Marketplace
        </Link>

        <div className="ms-auto">
          <div className="dropdown">
            <button
              className="btn btn-outline-info dropdown-toggle fw-semibold"
              type="button"
              id="menuDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end bg-dark border border-secondary animate__animated animate__fadeIn"
              aria-labelledby="menuDropdown"
            >
              <li>
                <Link className="dropdown-item text-light" to="/tools">
                  All Tools
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-light" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
