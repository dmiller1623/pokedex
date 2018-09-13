import * as actions from '../actions'

describe('actions', () => {
  it('should return a type add pokemon types', () => {
    const pokemon = []
    const expected = {
      type: 'ADD_POKEMON_TYPES',
      pokemon
    }
    const result = actions.addPokemonTypes(pokemon)

    expect(result).toEqual(expected)
  })

  it('should return a type isLoading', () => {
    const bool = true;
    const expected = {
      type: 'LOADING',
      bool
    }

    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })

  it('should return a type addPokemon', () => {
    const ids = []
    const expected = {
      type: 'ADD_POKEMON',
      ids
    }
    const result = actions.addPokemon(ids)

    expect(result).toEqual(expected)
  })
})