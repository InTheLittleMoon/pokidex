import React from "react";
import "./App.css";

function App() {
  async function pokiFetch() {
    //add number to end of fetch string for individual pokemon
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  pokiFetch();

  return <div>Hi Baby</div>;
}

export default App;
