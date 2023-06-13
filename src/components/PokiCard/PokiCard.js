import React from "react";
import "./PokiCard.css";

export default function PokiCard({ pokemon }) {
  if (!pokemon) return null;
  return (
    <div className={`pokicard-container ${pokemon.types[0].type.name}`}>
      <div className="upper-pokicard">
        <div className="pkName">{pokemon.name}</div>
        <div className={`pkID ${pokemon.types[0].type.name}Two`}>
          {pokemon.id}
        </div>
      </div>
      <div className="lower-pokicard">
        <div className="poki-typings-container">
          {pokemon.types.map((type) => {
            return (
              <li className={`poki-typing ${pokemon.types[0].type.name}Three`}>
                {type.type.name}
              </li>
            );
          })}
        </div>
        <div className="poki-image-container">
          <img alt="poki" src={pokemon.sprites.front_default}></img>
        </div>
      </div>
    </div>
  );
}
