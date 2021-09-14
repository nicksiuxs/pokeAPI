import { useState, useEffect } from "react";

const useSearchPokemon = (name) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    abilities: [],
    moves: [],
  });

  useEffect(() => {
    if (name !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          if (!res.ok) throw Error(res.status);
          return res.json();
        })
        .then((data) => {
          const { name, sprites, abilities, moves } = data;
          setPokemon({ name, image: sprites.front_default, abilities, moves });
        })
        .catch((error) => console.log(error));
    }
  }, [name]);

  return pokemon;
};

export default useSearchPokemon;
