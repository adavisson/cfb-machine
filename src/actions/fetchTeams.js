export const fetchTeams = () => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING_TEAMS' })
    const result = await fetch('https://api.collegefootballdata.com/teams/fbs')
    const teams = await result.json()
    dispatch({ type: 'ADD_TEAMS', teams: teams})
  }
}