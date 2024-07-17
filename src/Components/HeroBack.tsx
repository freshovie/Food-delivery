import React from "react";
import { HeroPage } from "../Models";

function HeroBack() {
  return (
    <React.Fragment>
      <HeroPage
        className="heroback"
        htext="Download the app now"
        ptext="Available on your favorite store. Start your Premium experience now"
      />
    </React.Fragment>
  );
}

export default HeroBack;
