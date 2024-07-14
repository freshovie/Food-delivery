import React from "react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import HeroPage from "./Components/HeroPage";

const Display = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroPage />
      <Footer />
    </BrowserRouter>
  );
};

export default Display;