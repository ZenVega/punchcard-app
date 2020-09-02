import React from 'react';
import './App.css';

import Rider from './components/rider-components/Rider.js'
import MainArea from './components/MainArea';
import PunchArea from './components/puncharea-components/PunchArea.js'

function App() {

  
  return (
    <div className="App">
      <Rider/>
      <MainArea/>
      <PunchArea/>
    </div>
  );
}

export default App;
