import React from "react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./pages/Navigation/Navbar";
import Footer from "./pages/Footer/Footer";
import {HeroFront, DFront, HeroBack, HowApp} from "./Components";

const Display = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroFront />
      <HowApp />
      <DFront />
      <HeroBack />
      <Footer />
    </BrowserRouter>
  );
};

export default Display;