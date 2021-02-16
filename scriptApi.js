const types = [
    'fire',
    'grass',
    'electric',
    'water',
    'ground',
    'rock',
    'fairy',
    'poison',
    'bug',
    'dragon',
    'psychic',
    'flying',
    'fighting',
    'normal',
]

const POKEMON_COUNT = 32

const getType = (data) => {
    const apiTypes = data.map((type) => type.type.name)
    const type = types.find((type) => apiTypes.indexOf(type) > -1)
    return type
}

const fetchPokemon = async (number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`
    const response = await fetch(url).then((response) => response.json())
    const { id, name, types } = response
    const type = getType(types)

    return { id, name, type }
}

const fetchPokemons = async () => {
    for( let i =1; i <= POKEMON_COUNT; i++ ) {
        const pokemon = await fetchPokemon(i)

        createPokemonCard(pokemon)
    }
}
fetchPokemons()
