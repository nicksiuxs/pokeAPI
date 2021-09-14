import React, { useState } from "react";
import { Link } from "react-router-dom";

import useSearchPokemon from "src/hooks/useSearchPokemon";

import "./Search.css";

const Search = () => {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const { pokemon, error } = useSearchPokemon(pokemonSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonSearch(pokemonName);
    console.log("enviando busqueda");
  };

  const handleOnChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const { name, image, abilities, moves } = pokemon;

  console.log(error);

  return (
    <div className="search">
      <div className="search__text">
        <h1>Search Pokémon</h1>
        <p>Search the pokemon by name or number</p>
      </div>
      <form onSubmit={handleSubmit} className="search__form">
        <input
          type="text"
          onChange={handleOnChange}
          required
          value={pokemonName}
          className="search__form-input"
          placeholder="name or number pokémon"
        />
        <input type="submit" value="Search" className="search__button" />
      </form>

      {error.status ? <h2>Pokémon "{error.param}" not found</h2> : null}

      {!error.status ? (
        <>
          {" "}
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
        </>
      ) : null}
    </div>
  );
};

export default Search;
