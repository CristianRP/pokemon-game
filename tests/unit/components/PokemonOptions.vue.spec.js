import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount( PokemonOptions, {
      props: {
        pokemons
      }
    })
  })

  test('should be match with the snapshot', () => {
    // console.log( wrapper.html() )
    // expect( wrapper ).toMatchInlineSnapshot(`
    //   <div class="options-container">
    //     <ul>
    //       <li>bulbasaur</li>
    //       <li>ivysaur</li>
    //       <li>venusaur</li>
    //       <li>charmander</li>
    //     </ul>
    //   </div>
    // `)
    expect( wrapper ).toMatchSnapshot()
  })

  test('should show the 4 options properly', () => {
    const elements = wrapper.findAll('li')
    const [ li1, li2, li3, li4 ] = elements
    expect(elements.length).toBe(4)

    expect(li1.text()).toEqual('bulbasaur')
    expect(li2.text()).toEqual('ivysaur')
    expect(li3.text()).toEqual('venusaur')
    expect(li4.text()).toEqual('charmander')
  })

  test('should emit "selection" with their params', () => {
    const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')
    console.log(wrapper.emitted('selection'));
    expect( wrapper.emitted('selection').length ).toBe(4)
    expect( wrapper.emitted('selection')[0] ).toEqual([1])
    expect( wrapper.emitted('selection')[1] ).toEqual([2])
    expect( wrapper.emitted('selection')[2] ).toEqual([3])
    expect( wrapper.emitted('selection')[3] ).toEqual([4])
  });

});
