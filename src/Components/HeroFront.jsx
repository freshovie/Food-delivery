import React from "react";
import { HeroPage } from "../Models";

function HeroFront() {
  return (
    <React.Fragment>
      <HeroPage
        className="heropage"
        rtext="Food App"
        htext="Why stay hungry when you can order from Bella Onojie"
        ptext="Download the Bella Onojie's food app now on"
      />
    </React.Fragment>
  );
}

export default HeroFront;
