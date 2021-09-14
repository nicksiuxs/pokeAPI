import React from "react";

import { Link } from "react-router-dom";

import "./CardPokemon.css";

const CardPokemon = ({ name, photo, index }) => {
  return (
    <Link to={"/home/" + index}>
      <div className="card-pokemon">
        <figure className="card-pokemon__img-container">
          <img src={photo} alt={name} className="card-pokemon__img" />
        </figure>
        <article className="card-pokemon__text-container">
          <span className="card-pokemon__name">{name}</span>
          <span>Details</span>
        </article>
      </div>
    </Link>
  );
};

export default CardPokemon;
