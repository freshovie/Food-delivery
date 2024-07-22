import React from "react";
import "../Styles/style.scss"; // Import the SCSS styling

// Define the HowApp functional component
function HowApp() {
  return (
    <React.Fragment>
      {/* Main div with the howapp class and centered text */}
      <div className="howapp text-center">
        <hr /> {/* Horizontal rule */}
        <div className="l-text">How the app Works</div> {/* Text content */}
      </div>
    </React.Fragment>
  );
}

export default HowApp; // Export the HowApp component
