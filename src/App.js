import React, {useState} from 'react';
import './App.css';

import Rider from './components/Rider.js'
import Sessions from './components/Sessions.js'
import TodaySession from './components/TodaySession.js'
import Timer from './components/Timer.js'

function App() {
  const [showSessions, setshowSessions] = useState(false);
  const [showTodaySession, setshowTodaySession] = useState(false);
  const [showTimer, setshowTimer] = useState(true);
  
  return (
    <div className="App">
      Here comes the App soon
      <h1>The App is gonna show Here</h1>
      <Rider/>
      {showSessions && <Sessions/>}  
      {showTodaySession && <TodaySession/>}  
      {showTimer && <Timer/>}  
    </div>
  );
}

export default App;
