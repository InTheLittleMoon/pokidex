import React from "react";
import "./Main.css";

//components
import PokiCard from "./components/PokiCard/PokiCard";

export default ({ filteredPokiArray }) => {
  return (
    <div className="main-container">
      {filteredPokiArray.map((pokemon) => (
        <PokiCard pokemon={pokemon} />
      ))}
    </div>
  );
};
