import React from "react";
import HeroList from "./Components/HeroList";
import Hero  from "./Models/Hero";

const heros: Hero[] = [{ id: 1, title: "Hero 1" }, { id: 2, title: "Hero 2" }];

const App: React.FC = () => {
  return (
    <div>
      <h1>Hero List</h1>

      <header className="App-header">
       Food Delivery 
      </header>
      <HeroList items={heros} />
    </div>
  );
};

export default App;
