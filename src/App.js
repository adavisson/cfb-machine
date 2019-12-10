import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MatchHistory from './components/MatchHistory';
import TeamStats from './components/TeamStats';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/match-history" component={MatchHistory} />
        <Route path="/team-stats" component={TeamStats} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
