const isLoadingReducer = (state = null, action) => {
  switch(action.type) {
    case 'LOADING':
      return action.bool
    default:
      return state
  }
}

export default isLoadingReducer