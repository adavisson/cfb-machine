import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import MatchupResults from './MatchupResults'
import { fetchTeams } from '../actions/fetchTeams'

const MatchHistory = () => {
  const teams = useSelector(state => state.teams)
  const dispatch = useDispatch()

  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    fetchTeams()
    console.log(teams)
    // setTeam1(teams[0].school)
    // setTeam2(teams[0].school)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const rendferForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='team.ControlSelect1'>
          <Form.Label>First Team</Form.Label>
          <Form.Control
            as='select'
            value={team1}
            onChange={(e) => setTeam1(e.target.value)}
          >
            {teams.map((team) => {
              return (
                <option key={'1_' + team.id} value={team.school}>
                  {team.school} {team.mascot}
                </option>
              )
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='team.ControlSelect2'>
          <Form.Label>Second Team</Form.Label>
          <Form.Control
            as='select'
            value={team2}
            onChange={(e) => setTeam2(e.target.value)}
          >
            {teams.map((team) => {
              return (
                <option key={'2_' + team.id} value={team.school}>
                  {team.school} {team.mascot}
                </option>
              )
            })}
          </Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    )
  }

  const handleClick = () => {
    setIsSubmitted(false)
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
    <div className='match-history container'>
      <h1>Match History</h1>
      {!isSubmitted && (
        <p>
          Select two teams to see results of all of the games they have played
          against each other.
        </p>
      )}
      {!isSubmitted && rendferForm()}
      {isSubmitted && renderResults()}
    </div>
  )
}

export default MatchHistory
