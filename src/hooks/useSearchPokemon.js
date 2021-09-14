import { useState, useEffect } from "react";

const useSearchPokemon = (name) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    abilities: [],
    moves: [],
  });

  const [error, setError] = useState({ status: false, param: "" });

  useEffect(() => {
    if (name !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          if (!res.ok) throw Error(res.status);
          return res.json();
        })
        .then((data) => {
          setError({ status: false, param: "" });
          const { name, sprites, abilities, moves } = data;
          setPokemon({ name, image: sprites.front_default, abilities, moves });
        })
        .catch((err) => {
          console.log(err);
          setError({ status: true, param: name });
        });
    }
  }, [name]);

  return { pokemon, error };
};

export default useSearchPokemon;
