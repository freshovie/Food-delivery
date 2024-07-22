import React from "react";
import { HeroPage } from "../Models"; // Import HeroPage component
import { FoodAd, appAd } from "../assets"; // Import image assets
import '../Styles/style.scss'; // Import SCSS styling

// Define the HeroFront functional component
function HeroFront() {
  return (
    <React.Fragment>
      {/* Main div with the herofront class */}
      <div className="herofront">
        {/* HeroPage component with props */}
        <HeroPage
          className="heropage"
          rtext="Food App"
          htext="Why stay hungry when you can order from Bella Onojie"
          ptext="Download the Bella Onojie's food app now on"
        />
        {/* Container div for layout */}
        <div className="container">
          {/* Phones div to contain the advertisement images */}
          <div className="phones">
            {/* Advertisement image for the app */}
            <div className="bye">
              <img src={appAd} alt="App Advertisement" className="ad-img" />
            </div>
            {/* Advertisement image for the food */}
            <div className="mee">
              <img src={FoodAd} alt="Food Advertisement" className="ad-img" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroFront; // Export the HeroFront component
