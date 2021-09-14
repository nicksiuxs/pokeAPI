import React from "react";

import { Link } from "react-router-dom";

import "./CardPokemon.css";

const CardPokemon = ({ pokemon, index }) => {
  const { name, sprites, id } = pokemon;

  const { front_default } = sprites;
  return (
    <>
      {index <= 1 ? (
        <Link to={"/home/" + index} className="card-pokemon-link">
          <div className="card-pokemon">
            <figure className="card-pokemon__img-container">
              <img
                src={front_default}
                alt={name}
                className="card-pokemon__img"
              />
            </figure>
            <article className="card-pokemon__text-container">
              <span className="card-pokemon__id">#{id}</span>
              <span className="card-pokemon__name">{name}</span>
              <span className="card-pokemon__details">Details</span>
            </article>
          </div>
        </Link>
      ) : (
        <div className="card-pokemon">
          <figure className="card-pokemon__img-container">
            <img src={front_default} alt={name} className="card-pokemon__img" />
          </figure>
          <article className="card-pokemon__text-container">
            <span className="card-pokemon__id">#{id}</span>
            <span className="card-pokemon__name">{name}</span>
          </article>
        </div>
      )}
    </>
  );
};

export default CardPokemon;
