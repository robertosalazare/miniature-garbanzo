import React from 'react'
import PokemonCard from './PokemonCard';

const PokemonList = ( {pokemonList} ) => {
    


    return (
        <div className="list">
            {pokemonList.map((poke) => 
                <PokemonCard key={poke.name} pokemon = {poke} />
            )}
        </div>

    )
}

export default PokemonList;
