import React from "react";

export default function Display({ selectedPokemon }) {
  if (selectedPokemon) {
    return <div className="display">{selectedPokemon.name}</div>;
  }
  return <div className="display">None Selected</div>;
}
