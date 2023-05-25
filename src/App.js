import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import Display from "./Display.js";
import "./App.css";

function App() {
  //held states
  const [pokiArray, setPokiArray] = useState([]);

  async function pokiOverFetch() {
    //add number to end of fetch string for individual pokemon
    let pokiBox = fetch("https://pokeapi.co/api/v2/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    return pokiBox;
  }

  async function pokiFetch() {
    //add number to end of fetch string for individual pokemon
    let pokiBox = fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setPokiArray(pokiBox);
  }

  //starts the nonsense
  useEffect(() => {
    pokiFetch();
    pokiOverFetch();
  }, []);

  return (
    <div className="App">
      <Sidebar pokiArray={pokiArray} />
      <Main pokiArray={pokiArray} />
      <Display />
    </div>
  );
}

export default App;
