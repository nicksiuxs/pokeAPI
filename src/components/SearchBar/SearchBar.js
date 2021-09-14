import React, { useState } from "react";
import useSearchPokemon from "src/hooks/useSearchPokemon";

const SearchBar = () => {
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
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleOnChange} />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;
