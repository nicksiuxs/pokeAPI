import React from "react";

import { Link } from "react-router-dom";
import PokemonLogo from "src/assets/pokemon-logo.png";
import Pokeball from "src/assets/poke-ball.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={PokemonLogo} className="header-logo" alt="pokemon" />
      </Link>
      <Link to="/search" className="header-search">
        <span>Search</span>
        <img src={Pokeball} alt="pokeball" />
      </Link>
    </header>
  );
};

export default Header;
