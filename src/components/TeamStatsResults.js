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
  })

  return (
    <div className="team-stats-results page">
      <h3>{props.year} Stats for {props.team}</h3>
      {!!loaded && stats.map(stat => {
        return(<p>{stat.statName.titleCase()}: {stat.statValue}</p>);
      })}
    </div>
  );
}
 
export default TeamStatsResults;