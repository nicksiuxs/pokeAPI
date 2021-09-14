import React from "react";

import "./MovesList.css";

const MovesList = ({ moves, title }) => {
  return (
    <div className="moves-list">
      <h3 className="moves-list__title">{title}</h3>
      <ul className="moves-list__moves">
        {moves.map((move, key) => {
          return <li key={key}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovesList;
