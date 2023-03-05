import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("notesToken");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {localStorage.getItem("notesToken") ? (
            <div className="ms-auto">
              <Link
                className="btn btn-primary me-3"
                to="/login"
                onClick={handleLogout}
                role="button"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="ms-auto">
              <Link className="btn btn-primary me-3" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary me-3" to="/signup" role="button">
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
