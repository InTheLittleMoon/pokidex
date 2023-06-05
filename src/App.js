import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import Display from "./Display.js";
import "./App.css";

function App() {
  //held states
  const [pokiArray, setPokiArray] = useState([]);
  const [filteredPokiArray, setFilteredPokiArray] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [timer, setTimer] = useState(null);

  async function fetchKantoPokemon() {
    //limited to the first 151
    const pokemonArray = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    )
      .then((response) => response.json())
      .then((allpokemon) => {
        return [...allpokemon.results];
      });
    Promise.all(
      pokemonArray.map((pokemon) => {
        let url = pokemon.url;
        return fetch(url)
          .then((response) => response.json())
          .then((pokeData) => {
            return { ...pokemon, ...pokeData };
          });
      })
    ).then((results) => {
      setPokiArray(results);
      setFilteredPokiArray(results);
    });
  }

  //currently only finds exact matches, should change that **eventually**
  const handleInput = (query) => {
    if (timer) {
      clearTimeout(timer);
    }
    // will only query after 1 second has passed since typing
    setTimer(
      setTimeout(() => {
        setFilteredPokiArray(
          pokiArray.filter((pokemon) => {
            console.log(
              "query",
              query.toUpperCase(),
              pokemon.name.toUpperCase()
            );
            if (query.toUpperCase() === pokemon.name.toUpperCase()) {
              return {
                name: pokemon.name,
              };
            }
          })
        );
      }, 1000)
    );
  };

  //starts the nonsense
  useEffect(() => {
    fetchKantoPokemon();
  }, []);

  return (
    <div className="App">
      <Sidebar pokiArray={pokiArray} handleInput={handleInput} />
      <Main filteredPokiArray={filteredPokiArray} />
      <Display selectedPokemon={filteredPokiArray} />
    </div>
  );
}

export default App;
