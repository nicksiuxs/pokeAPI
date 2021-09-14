import React from "react";
import { Link } from "react-router-dom";

import "./MovesList.css";

const MovesList = ({ moves, title, name }) => {
  return (
    <div className="moves-list">
      <Link to={"/move/" + name}>See more</Link>
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
