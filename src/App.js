import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import Display from "./Display.js";
import "./App.css";

function App() {
  //held states
  const [pokiArray, setPokiArray] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {}, []);

  // async function pokiOverFetch() {
  //   //add number to end of fetch string for individual pokemon
  //   let pokiBox = fetch("https://pokeapi.co/api/v2/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("This is Data from PokiOverFetch: ", data);
  //     });
  //   return pokiBox;
  // }

  async function pokiFetch() {
    //add number to end of fetch string for individual pokemon
    let pokiBox = await fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => data);

    setPokiArray(pokiBox.results);
  }

  //currently only finds exact matches, should change that **eventually**
  const handleInput = (query) => {
    if (timer) {
      clearTimeout(timer);
    }
    // will only query after 1 second has passed since typing
    setTimer(
      setTimeout(() => {
        pokiArray.filter((pokemon) => {
          if (query.toUpperCase() === pokemon.name.toUpperCase()) {
            // can expand object as needed in the future (with moves, types, abilities...etc)
            const pokemonObject = {
              name: pokemon.name,
            };
            setSelectedPokemon(pokemonObject);
          }
        });
      }, 1000)
    );
  };

  //starts the nonsense
  useEffect(() => {
    pokiFetch();
    // pokiOverFetch();
  }, []);

  return (
    <div className="App">
      <Sidebar pokiArray={pokiArray} handleInput={handleInput} />
      <Main pokiArray={pokiArray} />
      <Display selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default App;
