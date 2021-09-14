import React from "react";
import { useParams } from "react-router-dom";
import useSearchPokemon from "src/hooks/useSearchPokemon";

const MoveDetail = () => {
  let { name } = useParams();
  const pokemon = useSearchPokemon(name);

  const { moves } = pokemon;
  console.log(moves);
  return (
    <div>
      <ul>
        {moves?.map((move, key) => {
          return <li key={key}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default MoveDetail;
