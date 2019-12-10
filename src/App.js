import React from 'react';
import logo from './logo.svg';
import './App.css';
import MatchHistory from './components/MatchHistory';

function App() {
  return (
    <>
      <a className="link" href="https://andydavisson.com">Back to andydavisson.com</a>
      <div className="App">
        <div className="header">
          <h1>CFB Machine</h1>
        </div>
        <MatchHistory />
      </div>
    </>
  );
}

export default App;
