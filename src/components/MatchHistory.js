import React, { useState, useEffect } from 'react';

const MatchHistory = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      setTeams(data);
    }
    fetchData();
  }, []);

  return (
    <div className="component">
      <p>Select two teams to see results of all of the games they have played against each other.</p>
      
    </div>
  );
}
 
export default MatchHistory;