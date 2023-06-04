import React from "react";
import PokeCard from "./components/PokiCard/PokiCard";

export default function Display({ selectedPokemon }) {
  if (selectedPokemon) {
    return <PokeCard />;
  }
  return <div className="display">None Selected</div>;
}
