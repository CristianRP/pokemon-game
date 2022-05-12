import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock';
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

describe('PokemonPage Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount( PokemonPage )
  })

  test('should be match with the snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('should call mixPokemonArray on mounted', () => {
    const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArray')

    const wrapper = shallowMount( PokemonPage ) // could call only shallowMount

    expect( mixPokemonArraySpy ).toHaveBeenCalled()
  })

  test('should be match with the snapshot with pokemons', () => {
    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('should show PokemonPicture and PokemonOptions', () => {
    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    const pokemonPicture = wrapper.findComponent(PokemonPicture)
    const pokemonOptions = wrapper.findComponent(PokemonOptions)

    expect( pokemonPicture.exists() ).toBeTruthy()
    expect( pokemonOptions.exists() ).toBeTruthy()

    expect( pokemonPicture.attributes().pokemonid ).toBe('1')

    expect( pokemonOptions.attributes().pokemons ).toBeTruthy()
  })

  test('tests on CheckAnswer', async() => {
    const wrapper = shallowMount( PokemonPage, {
      data() {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    await wrapper.vm.checkAnswer(1)
    console.log(wrapper.vm);

    expect( wrapper.find('h2').exists() ).toBeTruthy()
    expect( wrapper.vm.showPokemon ).toBeTruthy()
    expect( wrapper.find('h2').text() ).toBe(`You're right, ${pokemons[0].name}`)

    await wrapper.vm.checkAnswer(2)
    expect( wrapper.vm.message ).toBe(`Opss, it was ${pokemons[0].name}`)
  })
})

