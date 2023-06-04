import React from "react";
import "./Main.css";

//components
import PokiCard from "./components/PokiCard/PokiCard";

export default () => {
  return (
      <div className="main-container">
        <PokiCard />
        <PokiCard />
      </div>
  );
};
