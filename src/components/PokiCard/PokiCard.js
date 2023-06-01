import React from "react";
import "./PokiCard.css";

export default function PokiCard() {
  let temp = ["Fire", "Water"];
  return (
    <div className="pokicard-container">
      <div className="upper-pokicard">
        {/* should recieve name from fetch */}
        <h3>Bulbasaur</h3>
        {/* should recieve id from fetch */}
        <h3>#001</h3>
      </div>
      <div className="lower-pokicard">
        <div className="poki-typings-container">
          {/* should recieve types from fetch */}
          {temp.map((type) => {
            return <li className="poki-typing">{type}</li>;
          })}
        </div>
        {/* should recieve image from fetch */}
        <img alt="poki" src="IMAGEHERE"></img>
      </div>
    </div>
  );
}
