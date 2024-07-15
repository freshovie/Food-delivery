import React from "react";
import "../../Styles/footer.scss";
import { Left } from "../../assets";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer bg-body-tertiary text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <motion.img
              src={Left}
              alt="Logo"
              onClick={scrollToTop}
              className="footer-logo"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <motion.ul
              className="goIcons list-unstyled d-flex justify-content-center mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <li>
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTwitter className="icons" />
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <FaFacebookSquare className="icons" />
                </motion.span>
              </li>
              <li>
                <motion.span
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <RiInstagramFill className="icons" />
                </motion.span>
              </li>
            </motion.ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <motion.ul
              className="list-unstyled copy-write mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li>
                <a href="#!" className="text-body">
                  Copywright 2020 Bella Onojie.com
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;