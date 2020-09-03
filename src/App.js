import React from 'react';
import './App.css'
import {useSelector} from 'react-redux'

import Rider from './components/rider-components/Rider.js'
import MainArea from './components/MainArea';
import PunchArea from './components/puncharea-components/PunchArea.js'
import ProjectList from './components/setting-components/ProjectList'
import ProjectAdder from './components/setting-components/ProjectAdder'

function App() {

  const showProjectList = useSelector(state=> state.settings.showProjectList)
  const showProjectAdder = useSelector(state=> state.settings.showProjectAdder)
  
  return (
    <div className="app">
      <Rider/>
      <MainArea/>
      <PunchArea/>
      {showProjectList && <ProjectList/>}
      {showProjectAdder && <ProjectAdder/>}
    </div>
  );
}

export default App;
