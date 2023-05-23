import React from "react";
import Sidebar from  "./Sidebar.js";
import Main from  "./Main.js";
import Display from "./Display.js"
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

  return (
    <div className="App">
      <Sidebar />
      <Main />
      <Display />
    </div>
  );
}

export default App;
