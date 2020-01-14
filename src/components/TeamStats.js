import React, {useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { generateKeyPairSync } from 'crypto';
import TeamStatsResults from './TeamStatsResults';

const TeamStats = () => {
  const [team, setTeam] = useState('');
  const [year, setYear] = useState(2019); 
  const [teams, setTeams] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      setTeams(data);
      setTeam(data[0].school);
    }
    fetchData();
    const date = new Date();
    const yearArr = [];
    for ( let i = 1900; i <= date.getFullYear(); i++){
      yearArr.push(i);
    }
    setYears(yearArr);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  const renderForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="team.ControlSelect">
          <Form.Label>Team</Form.Label>
          <Form.Control as="select" value={team} onChange={e => setTeam(e.target.value)}>
            {teams.map(team => {
              return (<option key={'1_' + team.id} value={team.school}>{team.school} {team.mascot}</option>)
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="year.ControlSelect">
          <Form.Label>Year</Form.Label>
          <Form.Control as="select" value={year} onChange={e => setYear(e.target.value)}>
            {years.map(year => {
              return(<option value={year}>{year}</option>)
            })}
          </Form.Control>
        </Form.Group>
        <Button varian="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

  const renderResults = () => {
    return (
      <>
        <Button onClick={() => setIsSubmitted(false)}>Edit Team/Year</Button>
        <TeamStatsResults team={team} year={year} />
      </>
    )
  }

  return (
    <div className="team-stats container">
      <h1>Team Stats</h1>
      {!isSubmitted && renderForm()}
      {isSubmitted && renderResults()}
    </div>
  );
}
 
export default TeamStats;