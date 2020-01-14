import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import RosterResults from './RosterResults';

const Roster = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.collegefootballdata.com/teams/fbs');
      const data = await result.json();
      setTeams(data);
      setTeam(data[0].school);
    }
    fetchData();
  },[]);

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
        <Button varian="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

  const renderRoster = () => {
    return (
      <>
        <Button onClick={() => setIsSubmitted(false)}>Change Team</Button>
        <RosterResults team={team}/>
      </>
    )
  }

  return (
    <div className="container">
      <h1>Rosters</h1>
      {!isSubmitted && renderForm()}
      {isSubmitted && renderRoster()}
    </div>
  );
}
 
export default Roster;