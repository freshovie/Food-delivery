import React from "react";

// Define the props interface for the DisplayImg component
interface DisplayImagesProps {
  images: string; // URL of the image to display
  className: string; // Class name for the main div
  ptext: string; // Paragraph text
  htext: string; // Header text
  stext: string; // Subtext or secondary text
}

// Define the DisplayImg functional component
const DisplayImg: React.FC<DisplayImagesProps> = ({
  images,
  className,
  ptext,
  htext,
  stext,
}) => {
  return (
    <div className={className}>
      {/* Container div for layout */}
      <div className="container">
        {/* Row div for Bootstrap grid layout */}
        <div className="row">
          {/* Empty column for spacing on small, medium, and large screens */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          {/* Main content column, spans 10 columns on large screens */}
          <div className="col-sm-12 col-md-12 col-lg-10">
            {/* Centered image container */}
            <div className="magecenter">
              {/* Image element with dynamic source and alt text */}
              <img src={images} alt={htext} />
            </div>
            {/* Container for text content */}
            <div className="dwords">
              {/* Paragraph text */}
              <p className="front-p">{ptext}</p>
              {/* Header text */}
              <h2 className="front-h">{htext}</h2>
              {/* Subtext or secondary text */}
              <p className="back-p">{stext}</p>
            </div>
          </div>
          {/* Empty column for spacing on small, medium, and large screens */}
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default DisplayImg; // Export the DisplayImg component
