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

  const convertCase = (string) => {
    const result = string.replace( /([A-Z])/g, " $1" );
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <div className="team-stats-results">
      <h3>{props.year} Stats for {props.team}</h3>
      <div className="stats">
        {!!loaded && stats.map(stat => {
          return(<p>{convertCase(stat.statName)}: {stat.statValue}</p>);
        })}
      </div>
    </div>
  );
}
 
export default TeamStatsResults;