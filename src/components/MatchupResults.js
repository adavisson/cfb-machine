import React, { useState, useEffect } from 'react';

const MatchupResults = (props) => {
  const [matchup, setMatchup] = useState({});
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(`https://api.collegefootballdata.com/teams/matchup?team1=${props.team1}&team2=${props.team2}`)
      const data = await result.json();
      console.log(data)
      setMatchup(data);
      setLoaded(true);
    }
    fetchData();
  }, [])

  return (
    <div className="matchups">
      <h3>Results</h3>
      <p>Wins for {props.team1}: {matchup.team1Wins}</p>
      <p>Wins for {props.team2}: {matchup.team2Wins}</p>
      <p>Ties: {matchup.ties}</p>
      {!!loaded && matchup.games.map(game => {
        return(
          <div className="game">
            <h5>{game.season}</h5>
            <p>Winner: {game.winner}</p>
            <p>Score: {game.awayTeam} {game.awayScore} - {game.homeScore} {game.homeTeam}</p>
            <p>Venue: {game.venue ? game.venue : 'N/A'}</p>
          </div>
        )
      })}
      {console.log(matchup.games)}
    </div>
  );
}
 
export default MatchupResults;