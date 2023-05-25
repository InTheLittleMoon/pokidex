import React from "react";
import "./Sidebar.css";

//components
import FilterOption from "./components/Sidebar-Filter-Options/Sidebar-Filter-Options";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-searchbar-container"></div>
      <div className="sidebar-filters-container">
        <div className="sidebar-filter-row">
          <FilterOption color={"green"} name={"Pokedex"} />
          <FilterOption color={"red"} name={"Moves"} />
        </div>
        <div className="sidebar-filter-row">
          <FilterOption color={"blue"} name={"Abilities"} />
          <FilterOption color={"yellow"} name={"Items"} />
        </div>
        <div className="sidebar-filter-row">
          <FilterOption color={"purple"} name={"Locations"} />
          <FilterOption color={"tan"} name={"Type Charts"} />
        </div>
      </div>
    </div>
  );
}
