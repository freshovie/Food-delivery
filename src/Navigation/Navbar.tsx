import React from "react";
import "../Styles/navbar.scss";
import { Left } from "../assets";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Left} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiOutlineMenuAlt1 />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/features">
              Products
            </a>
            <a className="nav-link" href="/pricing">
              Faq
            </a>
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
