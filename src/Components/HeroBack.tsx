import React from "react";
import { HeroPage } from "../Models"; // Import HeroPage component

// Define the HeroBack functional component
function HeroBack() {
  return (
    <React.Fragment>
      {/* HeroPage component with props */}
      <HeroPage
        className="heroback"
        htext="Download the app now"
        ptext="Available on your favorite store. Start your Premium experience now"
      />
    </React.Fragment>
  );
}

export default HeroBack; // Export the HeroBack component
