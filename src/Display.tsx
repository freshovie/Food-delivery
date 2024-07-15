import React from "react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./pages/Navigation/Navbar";
import Footer from "./pages/Footer/Footer";
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