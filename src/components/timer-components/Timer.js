import React from 'react';
import './Timer.css'

import ProjectSwitch from './ProjectSwitch'
import TimeCounter from './TimeCounter'
import StartBtn from './StartBtn'

const Timer = () => {
  return(
    <div className="Timer">
      <ProjectSwitch/> 
      <StartBtn/>
      <TimeCounter/>
    </div>
  )
}

export default Timer;