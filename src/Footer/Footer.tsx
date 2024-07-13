import React from "react";
import "../Styles/footer.scss";
import { Left } from "../assets";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer bg-body-tertiary text-center">
      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src={Left}
              alt="Logo"
              onClick={scrollToTop}
              className="footer-logo"
            />
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <ul className="goIcons list-unstyled d-flex justify-content-center mb-0">
              <li>
                <FaTwitter className="icons" />
              </li>
              <li>
                <FaFacebookSquare className="icons" />
              </li>
              <li>
                <RiInstagramFill className="icons" />
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul className="list-unstyled copy-write mb-0">
              <li>
                <a href="#!" className="text-body">
                  Copywright 2020 Bella Onojie.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
