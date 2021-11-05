import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2"

const getPokemonsFromGen = (genNumber) => {     
    return axios.get(`${baseUrl}/generation/${genNumber}`).then(result => result.data.pokemon_species)
}

const getPokemonDetail = (pokemonName) => {
    return axios.get(`${baseUrl}/pokemon/${pokemonName}`).then(result => result.data.sprites)
}

export { getPokemonsFromGen, getPokemonDetail }
