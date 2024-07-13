import React from "react";
import Hero  from "../Models/Hero";

interface HeroProps {
  items: Hero[];
}

const HeroList: React.FC<HeroProps> = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
