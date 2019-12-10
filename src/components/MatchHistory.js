import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import MatchupResults from './MatchupResults';

const MatchHistory = () => {
  const [teams, setTeams] = useState([]);
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
    
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      setTeams(data);
      setTeam1(data[0].school);
      setTeam2(data[0].school);
    }
    fetchData();
  }, []);

  const handleChange1 = (e) => {
    setTeam1(e.target.value);
  }

  const handleChange2 = (e) => {
    setTeam2(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  const rendferForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="team.ControlSelect1">
          <Form.Label>First Team</Form.Label>
          <Form.Control as="select" onChange={handleChange1}>
            {teams.map(team => {
              return (<option key={'1_' + team.id} value={team.school}>{team.school} {team.mascot}</option>)
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="team.ControlSelect2">
          <Form.Label>Second Team</Form.Label>
          <Form.Control as="select" onChange={handleChange2}>
            {teams.map(team => {
              return (<option key={'2_' + team.id} value={team.school}>{team.school} {team.mascot}</option>)
            })}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button> 
      </Form>
    )
  }

  const handleClick = () => {
    setIsSubmitted(false);
  }

  const renderResults = () => {
    return (
      <>
        <Button onClick={handleClick}>Change Teams</Button>
        <MatchupResults team1={team1} team2={team2} />
      </>
    )
  }

  return (
    <div className="match-history page">
      <h1>Match History</h1>
      {!isSubmitted && <p>Select two teams to see results of all of the games they have played against each other.</p>}
      {!isSubmitted && rendferForm()}
      {isSubmitted && renderResults()}
    </div>
  );
}
 
export default MatchHistory;