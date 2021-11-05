import { computeHeadingLevel } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { getPokemonDetail } from '../services/Pokemons'
import "./styles/PokemonCard.css"



const PokemonCard = ( {pokemon} ) => {

    const [ pokePhoto , setPokePhoto ] = useState('')

    useEffect( async () => {
        const id = pokemon.url.split('/')[6];

        const result = await getPokemonDetail(id)
        setPokePhoto(result.front_default)
    }, [])

    return (
        <div className="card">
            <p> {pokemon.name} </p>
            <img src={pokePhoto} alt={pokemon.name}></img>
        </div>
        
    )
}

export default PokemonCard;
