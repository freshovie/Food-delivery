import React from "react";
import "../Styles/style.scss";
import { motion } from "framer-motion";
import Button from "./Button";

interface HeroPageProps {
  className: string;
  rtext?: string;
  htext: string;
  ptext: string;
}

const HeroPage: React.FC<HeroPageProps> = ({
  className,
  htext,
  ptext,
  rtext,
}) => {
  return (
    <React.Fragment>
      <div className={className}>
        <motion.div
          className="heropage__container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-mage">
            <div className="overlay">
            {rtext && <h5 className="r-text">{rtext}</h5>}
              <h2 className="h-text">{htext}</h2>
              <p className="p-text">{ptext}</p>
              <div className="btnss">
                <Button label="Playstore" className="obtn" />
                <Button label="Appstore" className="ibtn" />
              </div>
            </div>
            {/* <div className="phones">
              <div>
                <img src={appAd} alt="" className="ad-img" />
              </div>
              <div className="mee">
                <img src={FoodAd} alt="" className="ad-img" />
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default HeroPage;
