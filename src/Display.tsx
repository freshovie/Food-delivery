import React from "react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./pages/Navigation/Navbar";
import Footer from "./pages/Footer/Footer";
import {HeroPage, DFront} from "./Components";

const Display = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroPage />
      <DFront />
      <Footer />
    </BrowserRouter>
  );
};

export default Display;