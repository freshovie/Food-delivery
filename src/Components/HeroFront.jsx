import React from "react";
import { HeroPage } from "../Models";
import { FoodAd, appAd } from "../assets";
import '../Styles/style.scss';

function HeroFront() {
  return (
    <React.Fragment>
      <div className="herofront">
        <HeroPage
          className="heropage"
          rtext="Food App"
          htext="Why stay hungry when you can order from Bella Onojie"
          ptext="Download the Bella Onojie's food app now on"
        />
        <div className="phones">
          <div className="bye">
            <img src={appAd} alt="" className="ad-img" />
          </div>
          <div className="mee">
            <img src={FoodAd} alt="" className="ad-img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroFront;
