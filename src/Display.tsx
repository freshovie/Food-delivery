import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import HeroPage from "./Components/HeroPage";

const Display = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Display;