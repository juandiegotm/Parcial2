import React, { useState, useEffect } from "react";
import {Badge} from 'react-bootstrap';
import { FormattedMessage, FormattedNumber } from "react-intl";

const PokemonsList = ({pokemonsData}) => {

  const [pokemons, setPokemons] = useState(pokemonsData.length > 0 ? pokemonsData : [])

  useEffect(() => {
    setPokemons(pokemonsData);
  }, [pokemonsData]);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            {" "}
            <FormattedMessage id="Image" />
          </th>
          <th scope="col">
            {" "}
            <FormattedMessage id="Name" />
          </th>
          <th scope="col">
            {" "}
            <FormattedMessage id="Description" />
          </th>
          <th scope="col">
            {" "}
            <FormattedMessage id="Height" />
          </th>
          <th scope="col">
            {" "}
            <FormattedMessage id="Weight" />
          </th>
          <th scope="col">
            <FormattedMessage id="Type" />
          </th>
        </tr>
      </thead>
      <tbody style={{ "textAlign": "left" }}>
        {pokemons.map((pokemon, index) =>
          returnPokemonItem(pokemon, index + 1)
        )}
      </tbody>
    </table>
  );
};

const returnPokemonItem = (pokemon, index) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <img
          src={pokemon.ThumbnailImage}
          alt={`Imagen de ${pokemon.name}`}
        ></img>
      </td>
      <td>{pokemon.name}</td>
      <td>{pokemon.description}</td>
      <td>{pokemon.height}</td>
      <td>
        <FormattedNumber value={pokemon.weight} />
      </td>
      <th>
        {pokemon.type.map((element) => {
          
          return <>
             <Badge variant="secondary"> {element}</Badge>
          </>;
        })}
      </th>
    </tr>
  );
};

export default PokemonsList;
