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
            <h5>#{player.jersey} {player.first_name} {player.last_name}</h5>
            <p>Position: {player.position}</p>
            <p>Height: {player.height}"</p>
            <p>Weight: {player.weight} lbs.</p>
            <p>Hometown: {player.home_city}, {player.home_state}, {player.home_country}</p>
          </div>
        )
      })}
    </div>
  );
}
 
export default RosterResults;