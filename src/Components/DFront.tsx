import React from "react";
import "../Styles/style.scss"; // Import SCSS styling
import DisplayImg from "../Models/DisplayImg"; // Import DisplayImg component
import { SecondApp, ThirdApp, firstApp } from "../assets"; // Import image assets

// Define the DFront functional component
function DFront() {
  // Array of data to be displayed
  const displayData = [
    {
      images: firstApp,
      className: "firstdiv",
      ptext: "Create an account",
      htext: "Create/login to an existing account to get started",
      stext: "An account is created with your email and a desired password",
    },
    {
      images: SecondApp,
      className: "secondiv",
      ptext: "Explore varieties",
      htext: "Shop for your favorite meal as e dey hot.",
      stext: "Shop for your favorite meals or drinks and enjoy while doing it.",
    },
    {
      images: ThirdApp,
      className: "firstdiv",
      ptext: "Checkout",
      htext: "When you're done, check out and get it delivered.",
      stext: "When you're done, check out and get it delivered with ease.",
    },
  ];

  return (
    <React.Fragment>
      {/* Map over displayData to render DisplayImg components */}
      {displayData.map((item, index) => (
        <DisplayImg
          key={index} // Unique key for each item
          images={item.images} // Image source
          className={item.className} // Class name for styling
          ptext={item.ptext} // Paragraph text
          htext={item.htext} // Header text
          stext={item.stext} // Subtext
        />
      ))}
    </React.Fragment>
  );
}

export default DFront; // Export the DFront component
