import React from "react";
import "./PokiCard.css";

export default function PokiCard({ pokemon }) {
  if (!pokemon) return null;
  return (
    /* needs to dynamically add background color based off primary typing */
    <div className="pokicard-container grass">
      <div className="upper-pokicard">
        <div className="pkName">{pokemon.name}</div>
        {/* needs to dynamically add font color based off primary typing */}
        <div className="pkID grassTwo">{pokemon.id}</div>
      </div>
      <div className="lower-pokicard">
        <div className="poki-typings-container">
          {pokemon.types.map((type) => {
            /* needs to dynamically add background color based off primary typing */
            return <li className="poki-typing grassThree">{type.type.name}</li>;
          })}
        </div>
        <div className="poki-image-container">
          <img alt="poki" src={pokemon.sprites.front_default}></img>
        </div>
      </div>
    </div>
  );
}
