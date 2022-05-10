import pokemonApi from '@/api/pokemonApi'

describe('Name of the group', () => {
  test('axios must have the pokemon API URL', () => {
    expect( pokemonApi.defaults.baseURL )
      .toBe('https://pokeapi.co/api/v2/pokemon')
  });
});
