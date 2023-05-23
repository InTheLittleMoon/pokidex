import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import "./App.css";

function App() {
  //held states
  const [pokiArray, setPokiArray] = useState([]);

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
  }, []);

  return (
    <>
      <Sidebar pokiArray={pokiArray} />
      <Main pokiArray={pokiArray} />
    </>
  );
}

export default App;
