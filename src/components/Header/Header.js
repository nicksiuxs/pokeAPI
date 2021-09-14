import React from "react";

import { Link } from "react-router-dom";
import PokemonLogo from "src/assets/pokemon-logo.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={PokemonLogo} className="header-logo" alt="pokemon" />
      </Link>
      <Link to="/search">Search pokemons</Link>
    </header>
  );
};

export default Header;
