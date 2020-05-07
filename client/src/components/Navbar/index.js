import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home <span> | </span>
            </Link>
          </li>
          <li className="nav-item howToPlay">
            <Link
              to="/HowToPlay"
              className={
                window.location.pathname === "/HowToPlay"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              How To Play <span> | </span>
            </Link>
          </li>
          <li className="nav-item rules">
            <Link
              to="/Rules"
              className={
                window.location.pathname === "/Rules"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Rules <span> | </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
