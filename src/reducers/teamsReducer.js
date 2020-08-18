const teamsReducer = (state = {teams: [], loading: false}, action) => {
  switch(action.type){
    case 'LOADING_TEAMS':
      return {
        ...state,
        loading: true
      }
    case 'ADD_TEAMS':
      return {
        ...state,
        teams: [action.teams],
        loading: false
      }
    default: 
      return state
  }
}

export default teamsReducer