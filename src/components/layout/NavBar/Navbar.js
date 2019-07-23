import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand text-white text-lg brand-text" to="/">
              Online Technical Test
            </div>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fas fa-film fa-5x" id="film-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
