<template>
  <h1 v-if="!pokemon">Loading...</h1>
  <div v-else>
    <h1>Who is that pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon='showPokemon' />
    <PokemonOptions
      :pokemons="pokemonArray"
      @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">New Game</button>
    </template>
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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArray = await getPokemonOptions()

      const randomInt = Math.floor( Math.random() * 4 )

      this.pokemon = this.pokemonArray[ randomInt ]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      if (selectedId === this.pokemon.id) {
        this.message = `You're right, ${ this.pokemon.name }`
      } else {
        this.message = `Opss, it was ${ this.pokemon.name }`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArray = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>