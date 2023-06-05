import React, { useEffect, useState } from "react";
import "./Random-Displayed-Pokemon.css";

export default function RandomDisplayedPokemon({ pokiArray }) {
  const [displayedPokimon, setDisplayedPokimon] = useState(null);

  const displayNewPokimon = () => {
    let temp = Math.floor(Math.random() * 152);
    if (temp === 0) {
      temp = 1;
    }
    setDisplayedPokimon(pokiArray[temp].sprites.front_default);
  };

  setInterval(displayNewPokimon, 5000);

  return (
    <div className="random-displayed-pokemon-container">
      <img alt="POKEMON HERE" src={displayedPokimon}></img>
    </div>
  );
}
