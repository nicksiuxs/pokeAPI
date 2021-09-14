import React from "react";

import CardPokemon from "src/components/CardPokemon/CardPokemon";

import firstCharge from "src/assets/poke-json.json";

import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<h1 className="home-title">Poke-api</h1>
			<ul className="home-pokemons">
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
