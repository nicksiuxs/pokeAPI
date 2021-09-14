import React, { useState } from "react";
import { Link } from "react-router-dom";

import useSearchPokemon from "src/hooks/useSearchPokemon";

import "./Search.css";

const Search = () => {
  let namePokemon = "";
  const [pokemonSearch, setPokemonSearch] = useState("");

  const pokemon = useSearchPokemon(pokemonSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonSearch(namePokemon);
    console.log("enviando busqueda");
  };

  const handleOnChange = (e) => {
    namePokemon = e.target.value.toLowerCase();
  };

  console.log(pokemon);

  const { name, image, abilities, moves } = pokemon;

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} />
        <input type="submit" value="search" />
      </form>

      <div>
        <figure>
          <img src={image} alt={name} />
        </figure>
        <article>
          <h3>{name}</h3>
        </article>
      </div>

      <div>
        <ul>
          {abilities?.map((ability, key) => {
            return <li key={key}>{ability.ability.name}</li>;
          })}
        </ul>
      </div>

      <div>
        <ul>
          {moves?.map((move, key) => {
            return (
              <li key={key}>
                <Link to={"/move/" + name}>{move.move.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
