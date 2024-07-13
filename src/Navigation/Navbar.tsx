import React from "react";
import "../Styles/navbar.scss";
import { Left } from "../assets";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-body-tertiary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-fluid">
        <motion.a
          className="navbar-brand"
          href="/"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img src={Left} alt="Logo" />
        </motion.a>
        <motion.button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <HiOutlineMenuAlt1 />
        </motion.button>
        <motion.div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;