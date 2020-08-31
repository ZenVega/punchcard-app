import React from 'react';

import ProjectSwitch from './timer-components/ProjectSwitch'
import TimeCounter from './timer-components/TimeCounter'
import StartBtn from './timer-components/StartBtn'

const Timer = () => {
  return(
    <div>
      <ProjectSwitch/> 
      <TimeCounter/>
      <StartBtn/>
    </div>
  )
}

export default Timer;