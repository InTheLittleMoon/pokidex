import React from "react";
import "./PokiCard.css";

export default function PokiCard() {
  //temp for pkTypings array displayed on card
  let temp = ["Grass", "Poison"];
  return (
    <div className="pokicard-container grass">
      <div className="upper-pokicard">
        {/* should recieve name from fetch */}
        <div className="pkName">Bulbasaur</div>
        {/* should recieve id from fetch */}
        <div className="pkID">#001</div>
      </div>
      <div className="lower-pokicard">
        <div className="poki-typings-container">
          {/* should recieve types from fetch */}
          {temp.map((type) => {
            return <li className="poki-typing grassTwo">{type}</li>;
          })}
        </div>
        {/* should recieve image from fetch */}
        <div className="poki-image-container">
          <img
            alt="poki"
            src="https://www.icons101.com/icon_ico/id_60322/303_Mawile.ico"
          ></img>
        </div>
      </div>
    </div>
  );
}
