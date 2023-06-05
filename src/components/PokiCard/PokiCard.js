import React from "react";
import "./PokiCard.css";

export default function PokiCard({ pokemon }) {
  if (!pokemon) return null;
  //temp for pkTypings array displayed on card
  return (
    <div className={`pokicard-container ${pokemon.types[0].type.name}`}>
      <div className="upper-pokicard">
        {/* should recieve name from fetch */}
        <div className="pkName">{pokemon.name}</div>
        {/* should recieve id from fetch */}
        <div className="pkID">{pokemon.id}</div>
      </div>
      <div className="lower-pokicard">
        <div className="poki-typings-container">
          {/* should recieve types from fetch */}
          {pokemon.types.map((type) => {
            return <li className="poki-typing grassTwo">{type.type.name}</li>;
          })}
        </div>
        {/* should recieve image from fetch */}
        <div className="poki-image-container">
          <img alt="poki" src={pokemon.sprites.front_default}></img>
        </div>
      </div>
    </div>
  );
}
