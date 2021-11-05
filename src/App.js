import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import PokemonList from './components/PokemonList';

const App = () => {

  const [pokemonList, setPokemonList] = useState([])

  const onChangePokemonList = (pokemonList) => { 
    setPokemonList(pokemonList)
  }

  return (
    <div class="app">
      <Dropdown onChange = {onChangePokemonList} />
      <PokemonList pokemonList = {pokemonList}/>
    </div>
  );
}

export default App;
