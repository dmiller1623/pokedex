import isLoadingReducer from './isLoadingReducer'
import * as actions from '../actions'

describe('isLoadingReducer', () => {
  it('should return the intitial state', () => {
    const expected = null;
    const results = isLoadingReducer(undefined, {})

    expect(results).toEqual(expected)
  })

  it('should return the opposite of the current state', () => {
    const currentState = true
    const expected = false
    const results = isLoadingReducer(currentState, actions.isLoading(false))

    expect(results).toEqual(expected)
  })
})