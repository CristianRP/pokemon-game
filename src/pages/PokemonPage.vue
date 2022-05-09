<template>
  <h1>How is that pokémon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon='true' />
  <PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  }
}

getPokemonOptions()
</script>

<style>

</style>