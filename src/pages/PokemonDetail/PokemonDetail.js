import React from "react";
import { useParams } from "react-router-dom";

import firstCharge from "src/assets/poke-json.json";

import "./PokemonDetail.css";

const PokemonDetail = () => {
  let { index } = useParams();
  const pokemon = firstCharge[index];

  console.log(pokemon);

  const { name, sprites, abilities, moves } = pokemon;
  const { front_default, back_default, front_shiny } = sprites;
  return (
    <div className="pokemon-detail">
      <h2 className="pokemon-detail__title">{name}</h2>
      <ul className="pokemon-detail__images">
        <li>
          <img src={front_default} alt="front" />
        </li>
        <li>
          <img src={back_default} alt="back" />
        </li>
        <li>
          <img src={front_shiny} alt="shinny" />
        </li>
      </ul>

      <div className="pokemon-detail__about">
        <div className="pokemon-detail__abilities">
          <h3>Abilities</h3>
          <ul>
            {abilities.map((ability, key) => {
              return <li key={key}>{ability.ability.name}</li>;
            })}
          </ul>
        </div>
        <div className="pokemon-detail__moves">
          <h3>Moves</h3>
          <ul>
            {moves.map((move, key) => {
              return <li key={key}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
