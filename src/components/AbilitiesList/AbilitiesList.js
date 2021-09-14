import React from "src/components/AbilitiesList/AbilitiesList";

const AbilitiesList = ({ abilities, title }) => {
  return (
    <div className="abilities-list">
      <h3>{title}</h3>
      <ul>
        {abilities.map((ability, key) => {
          return <li key={key}>{ability.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default AbilitiesList;
