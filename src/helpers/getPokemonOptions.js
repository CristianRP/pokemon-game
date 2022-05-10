import pokemonApi from "@/api/pokemonApi"

export const getPokemons = () => {
  const pokemonsArray = Array.from(Array(650))

  return pokemonsArray.map( ( _ , index ) => index + 1)
}

export const getPokemonNames = async( [poke1, poke2, poke3, poke4] = [] ) => {
  // const response = await pokemonApi.get(`/${1}`)
  // console.log(response)
  const promiseArr = [
    pokemonApi.get(`/${poke1}`),
    pokemonApi.get(`/${poke2}`),
    pokemonApi.get(`/${poke3}`),
    pokemonApi.get(`/${poke4}`),
  ]

  const [ pokeData1, pokeData2, pokeData3, pokeData4 ] = await Promise.all( promiseArr )

  return [
    { name: pokeData1.data.name, id: pokeData1.data.id },
    { name: pokeData2.data.name, id: pokeData2.data.id },
    { name: pokeData3.data.name, id: pokeData3.data.id },
    { name: pokeData4.data.name, id: pokeData4.data.id }
  ]
}

export const getPokemonOptions = async() => {

  const mixedPokemons = getPokemons()
                          .sort(() => Math.random() - 0.5 )

  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

  return pokemons
}


export default getPokemonOptions
