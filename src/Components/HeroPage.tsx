import React from "react";
import "../Styles/style.scss";
import { motion } from "framer-motion";
import { FoodAd, appAd } from "../assets";
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
<div className="hero-mage">
            <div className="overlay">
              <h5 className="r-text">Food app</h5>
              <h2 className="h-text">
                Why stay hungry when you can <br /> order from Bella Onojie
              </h2>
              <p className="p-text">
                Download the Bella Onojie's food app now on
              </p>
              <div className="btnss">
                <button className="obtn">Playstore</button>
                <button className="ibtn">Appstore</button>
              </div>
            </div>
            <div className="phones">
              <img src={appAd} alt="" className="ad-img" />
              <img src={FoodAd} alt="" className="ad-img" />
            </div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default HeroPage;
