import React from "react";
import { Link } from "react-router-dom";

import MoveItem from "../MoveItem/MoveItem";

import "./MovesList.css";

const MovesList = ({ moves, title, name }) => {
  return (
    <div className="moves-list">
      <Link to={"/move/" + name} className="move-list__see-more">
        See more
      </Link>
      <h3 className="moves-list__title">{title}</h3>

      <ul className="moves-list__moves">
        {moves.map((move, key) => {
          if (key > 10) return null;
          return (
            <li key={key}>
              <MoveItem text={move.move.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovesList;
