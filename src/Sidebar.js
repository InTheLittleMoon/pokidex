import React from "react";
import "./Sidebar.css";

//image imports
import magnifyingGlassIcon from "./assets/images/sidebar-searchbar-icon.png";

//components
import FilterOption from "./components/Sidebar-Filter-Options/Sidebar-Filter-Options";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-searchbar-container">
        <h1>
          What Pokémon
          <br /> are you looking for?
        </h1>
        <div className="searchbar">
          <img alt="search" src={magnifyingGlassIcon}></img>
          <input placeholder="Search Pokémon, Moves, Abilities, etc"></input>
        </div>
      </div>
      <div className="sidebar-filters-container">
        <div className="sidebar-filter-row">
          <FilterOption color={0} name={"Pokedex"} />
          <FilterOption color={1} name={"Moves"} />
        </div>
        <div className="sidebar-filter-row">
          <FilterOption color={2} name={"Abilities"} />
          <FilterOption color={3} name={"Items"} />
        </div>
        <div className="sidebar-filter-row">
          <FilterOption color={4} name={"Locations"} />
          <FilterOption color={5} name={"Type Charts"} />
        </div>
      </div>
    </div>
  );
}
