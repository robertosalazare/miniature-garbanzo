import React, { useCallback, useState } from 'react'
import { getPokemonsFromGen } from '../services/Pokemons'


const Dropdown = ( {onChange} ) => {

    const [selectedGen, setGen] = useState('')

    const changeSelectedGen = useCallback( async (e) => {
        setGen(e.target.value)
        const result = await getPokemonsFromGen(e.target.value)
        onChange(result);
    }, [setGen])

    return (
        <select value={selectedGen} onChange={changeSelectedGen}>
            <option value=""> Select generation</option>
            <option value="1">GEN 1</option>
            <option value="2">GEN 2</option>
            <option value="3">GEN 3</option>
            <option value="4">GEN 4</option>
            <option value="5">GEN 5</option>
        </select>
    )
}

export default Dropdown;
