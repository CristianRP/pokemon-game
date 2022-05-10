<template>
  <h1 v-if="!pokemon">Loading...</h1>
  <div v-else>
    <h1>Who is that pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon='showPokemon' />
    <PokemonOptions :pokemons="pokemonArray"/>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data() {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions()

      const randomInt = Math.floor( Math.random() * 4 )

      this.pokemon = this.pokemonArray[ randomInt ]
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>