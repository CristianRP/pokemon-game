<template>
  <h1>How is that pokémon?</h1>
  <PokemonPicture :pokemonId="4" />
  <PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>

<style>

</style>