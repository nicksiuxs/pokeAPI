import React from "react";
import { useParams } from "react-router-dom";

import MoveItem from "src/components/MoveItem/MoveItem";

import useSearchPokemon from "src/hooks/useSearchPokemon";

import "./MoveDetail.css";

const MoveDetail = () => {
  let { name } = useParams();

  const { pokemon } = useSearchPokemon(name);

  const { moves } = pokemon;

  return (
    <div className="move-detail">
      <h1 className="move-detail__title">{name} Moves</h1>
      <ul className="move-detail__list">
        {moves?.map((move, key) => {
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

export default MoveDetail;
