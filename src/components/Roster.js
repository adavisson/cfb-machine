import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';

const Roster = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      setTeams(data);
      setTeam(data[0].school);
    }
    fetchData();
  },[]);

  const handleChangeTeam = (e) => {
    setTeam(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const renderForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="team.ControlSelect">
          <Form.Label>Team</Form.Label>
          <Form.Control as="select" value={team} onChange={handleChangeTeam}>
            {teams.map(team => {
              return (<option key={'1_' + team.id} value={team.school}>{team.school} {team.mascot}</option>)
            })}
          </Form.Control>
        </Form.Group>
        <Button varian="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

  return (
    <div className="container">
      <h1>Rosters</h1>
      {renderForm()}
    </div>
  );
}
 
export default Roster;