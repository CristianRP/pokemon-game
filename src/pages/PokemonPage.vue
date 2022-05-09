<template>
  <h1>How is that pokémon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon='true' />
  <PokemonOptions :pokemons="pokemonArray"/>
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
      pokemonArray: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions()
      console.log(this.pokemonArray);
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>