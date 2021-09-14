import React from "react";
import { useParams } from "react-router-dom";

import firstCharge from "src/assets/poke-json.json";

import "./PokemonDetail.css";

const PokemonDetail = () => {
  let { index } = useParams();
  const pokemon = firstCharge[index];

  const { name, sprites, abilities, moves } = pokemon;
  const { front_default, back_default } = sprites;
  console.log(pokemon);
  return (
    <div className="pokemon-detail">
      <h2>{name}</h2>
      <ul>
        <li>
          <img src={front_default} alt="front" />
        </li>
        <li>
          <img src={back_default} alt="back" />
        </li>
      </ul>
      <div>
        <h3>Abilities</h3>
        <ul>
          {abilities.map((ability, key) => {
            return <li>{ability.ability.name}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>Moves</h3>
        <ul>
          {moves.map((move, key) => {
            return <li>{move.move.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetail;
