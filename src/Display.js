import React from "react";
import "./Display.css";

export default function Display({ selectedPokemon }) {
  if (selectedPokemon) {
    console.log("selectedPokemon", selectedPokemon);
    return (
      <div className={`display ${selectedPokemon.types[0].type.name}`}>
        <div className="container">
          <div className="infoBar">
            <div className="title">{selectedPokemon.name}</div>
            <div className="poki-typings-container-display">
              {selectedPokemon.types.map((type) => {
                return (
                  <li
                    className={`poki-typing-display ${selectedPokemon.types[0].type.name}Three`}
                  >
                    {type.type.name}
                  </li>
                );
              })}
            </div>
          </div>
          <div className="poki-image-container-display">
            <img alt="poki" src={selectedPokemon.sprites.front_default} />
          </div>
        </div>
        <div className="paper"></div>
      </div>
    );
  }
  return <div className="display">None Selected</div>;
}
