import React from "react";

import MovesList from "src/components/MovesList/MovesList";
import CardPokemon from "../CardPokemon/CardPokemon";
import AbilitiesList from "src/components/AbilitiesList/AbilitiesList";

import "./CardPokemon.css";

const CardPokemonInfo = ({ pokemon }) => {
  const { name, abilities, moves } = pokemon;
  return (
    <div className="card-pokemon-info">
      <CardPokemon pokemon={pokemon} />

      <div className="card-pokemon-info__details">
        <AbilitiesList abilities={abilities} title="Abilities" />
        <MovesList moves={moves} name={name} title="Moves" />
      </div>
    </div>
  );
};

export default CardPokemonInfo;
