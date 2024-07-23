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
          imgd={appAd}
          imgr={FoodAd}
        />
      </div>
    </React.Fragment>
  );
}

export default HeroFront; // Export the HeroFront component
