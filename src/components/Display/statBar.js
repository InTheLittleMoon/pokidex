import React from "react";

export default function StatBar({ stat }) {
  const value = stat.base_stat;
  const color =
    stat.base_stat > 75 ? "green" : stat.base_stat > 55 ? "orange" : "red";
  return (
    <div className="statBar">
      <div className="statBar-labels">
        <p>{stat.stat.name}:</p>
        <h5>{value}</h5>
      </div>
      <div className="statBar-line">
        <div
          className="statBar-fill"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
