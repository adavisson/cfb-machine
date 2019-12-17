import React, {useState, useEffect} from 'react';

const TeamStatsResults = (props) => {
  const [stats, setStats] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(`https://api.collegefootballdata.com/stats/season?year=${props.year}&team=${props.team}`)
      const data = await result.json();
      setStats(data);
      setLoaded(true);
    }
    fetchData();
  },[])

  return (
    <div className="team-stats-results">
      <h3>{props.year} Stats for {props.team}</h3>
      <div className="stats">
        {!!loaded && stats.map(stat => {
          return(<p>{stat.statName}: {stat.statValue}</p>);
        })}
      </div>
    </div>
  );
}
 
export default TeamStatsResults;