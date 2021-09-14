import React from "src/components/AbilitiesList/AbilitiesList";

import MoveItem from "../MoveItem/MoveItem";

import "./AbilitiesList.css";

const AbilitiesList = ({ abilities, title }) => {
  return (
    <div className="abilities-list">
      <h3 className="abilities-list__title">{title}</h3>
      <ul className="abilities-list__abilities">
        {abilities.map((ability, key) => {
          return (
            <li key={key}>
              <MoveItem text={ability.ability.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AbilitiesList;
