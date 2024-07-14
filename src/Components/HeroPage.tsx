import React from "react";
import "../Styles/style.scss";
import { motion } from "framer-motion";
import { FoodAd, HeroImg, appAd } from "../assets";
import Button from "./Button";

const HeroPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="heropage">
        <motion.div
          className="heropage__container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={HeroImg} alt="Hero background" className="hero-img" />
          <div className="overlay">
            <p className="p-text">Food app</p>
            <h1 className="h-text">
              Why stay hungry when <br /> you can order from Bella Onojie
            </h1>
            <p className="r-text">
              Download the Bella Onojie's food app now on
            </p>
            <div className="btn-div">
              <Button
                label="Play Store"
                className="obtn"
              />
              <Button
                label="App Store"
                className="ibtn"
              />
            </div>
          </div>
        </motion.div>
      <div className="mobi-app">
        <div className="mobi-view">
        <img src={FoodAd} alt="Food advertisement" />
        <img src={appAd} alt="App advertisement" />
        </div>
        <div className="s-format">
        <hr />
        <h1 className="s-text"> How the app works</h1>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default HeroPage;
