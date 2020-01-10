import React, { useState,useEffect } from 'react';

const RosterResults = (props) => {
  const [roster,setRoster] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.collegefootballdata.com/roster?team=${props.team}`)
      const data = await result.json();
      setRoster(data);
    }

    fetchData();
  },[]);

  return (
    <div className="roster-results">
      {roster.map(player => {
        return(
          <div className="player">
            <p>{player.first_name} {player.last_name}</p>
          </div>
        )
      })}
    </div>
  );
}
 
export default RosterResults;