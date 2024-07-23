import React from "react";
import "../Styles/style.scss"; // Import the SCSS styling
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations
import Button from "./Button"; // Import the Button component

// Define the props interface for the HeroPage component
interface HeroPageProps {
  className: string; // Class name for the main div
  rtext?: string; // Optional text for the header
  htext: string; // Header text
  ptext: string; // Paragraph text
  contain?: boolean; // Optional boolean for containing additional content
  imgd?: string;
  imgr?: string;
}

// Define the HeroPage functional component
const HeroPage: React.FC<HeroPageProps> = ({
  className,
  htext,
  ptext,
  rtext,
  contain = true, // Default value set to false
  imgd,
  imgr,
}) => {
  return (
    <React.Fragment>
      {/* Main div with a dynamic class name */}
      <div className={className}>
        {/* Motion div for fade-in animation */}
        <motion.div
          className="heropage__container"
          initial={{ opacity: 0 }} // Initial state of opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 1 }} // Duration of the animation
        >
          {/* Hero image container */}
          <div className="hero-mage">
            {/* Overlay div for the text content */}
            <div className="overlay">
              {/* Render rtext if it exists */}
              {rtext && <h5 className="r-text">{rtext}</h5>}
              {/* Header text */}
              <h2 className="h-text">{htext}</h2>
              {/* Paragraph text */}
              <p className="p-text">{ptext}</p>
              {/* Button container */}
              <div className="btnss">
                {/* Playstore button */}
                <Button label="Playstore" className="obtn" />
                {/* Appstore button */}
                <Button label="Appstore" className="ibtn" />
              </div>
            </div>
            {/* Container div for layout */}
            {contain && (
              <div className="container">
                {/* Phones div to contain the advertisement images */}
                <center>

                <div className="phones">
                  {/* Advertisement image for the app */}
                  <div className="bye">
                    <img src={imgd} alt="App Advertisement" className="ad-img" />
                  </div>
                  {/* Advertisement image for the food */}
                  <div className="mee">
                    <img src={imgr} alt="Food Advertisement" className="ad-img" />
                  </div>
                </div>
                </center>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default HeroPage; // Export the HeroPage component
