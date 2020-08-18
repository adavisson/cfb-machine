export const fetchTeams = () => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING_TEAMS' })
    try {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs')
      const teams = await result.json()
      dispatch({ type: 'ADD_TEAMS', teams: teams})
    } catch(e) {
      console.log(e)
    }
  }
}