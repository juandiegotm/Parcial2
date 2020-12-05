import PokemonsList from "./components/pokemonsList";
import Chart from "./components/chart"
import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { Container } from "react-bootstrap";
import pokemonsService from "./Service/pokemons"
import "./App.css";

function App() {

  const intl = useIntl();
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const pokemosRequest =
        intl.locale === "es" ? pokemonsService.getPokemonsSpanish : pokemonsService.getPokemonsEnglish;
      const res = await pokemosRequest();
      setPokemons(res.data);
    }
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <Container style={{display: 'flex', "flexDirection": 'column', height: '100vh'}}>
        <h2 style={{"textAlign": "left"}}> Most wanted Pokemons </h2>
        <PokemonsList pokemonsData={pokemons}/>
        <Chart pokemonsData={pokemons}/>
      </Container>
    </div>
  );
}

export default App;
