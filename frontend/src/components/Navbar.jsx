import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          AI-Tour-Planner
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Left side */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Search
              </a>
            </li>
          </ul>

          {/* Right side */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active me-3" href="#">
                Login
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active me-3" href="#">
                Signup
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;