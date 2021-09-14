import React from "react";

import CardPokemon from "src/components/CardPokemon/CardPokemon";

import firstCharge from "src/assets/poke-json.json";

import PokemonLogo from "src/assets/pokemon-logo.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <figure className="home__logo-container">
        <img src={PokemonLogo} className="home__logo" alt="pokemon" />
      </figure>
      <ul className="home__pokemons">
        {firstCharge.map((pokemon, index) => {
          return (
            <li key={pokemon.id}>
              <CardPokemon
                name={pokemon.name}
                photo={pokemon.sprites.front_default}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
