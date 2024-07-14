import React from "react";

interface DisplayImagesProps {
  images: string;
  className: string;
  ptext: string;
  htext: string;
  stext: string;
}

const DisplayImg: React.FC<DisplayImagesProps> = ({
  images,
  className,
  ptext,
  htext,
  stext,
}) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10">
            <img src={images} alt={htext} />
            <div className="dwords">
              <p className="front-p">{ptext}</p>
              <h2 className="front-h">{htext}</h2>
              <p className="back-p">{stext}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default DisplayImg;
