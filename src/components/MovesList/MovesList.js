import React from "react";

import "./MovesList";

const MovesList = ({ moves, title }) => {
  return (
    <div className="moves-list">
      <h3>{title}</h3>
      <ul>
        {moves.map((move, key) => {
          return <li key={key}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovesList;
