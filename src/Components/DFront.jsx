import React from "react";
import "../Styles/style.scss";
import DisplayImg from "./DisplayImg";
import { SecondApp, ThirdApp, firstApp } from "../assets";

function DFront() {
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
      {displayData.map((item, index) => (
        <DisplayImg
          key={index}
          images={item.images}
          className={item.className}
          ptext={item.ptext}
          htext={item.htext}
          stext={item.stext}
        />
      ))}
    </React.Fragment>
  );
}

export default DFront;
