import React from 'react';

import ProjectSwitch from './ProjectSwitch'
import TimeCounter from './TimeCounter'
import StartBtn from './StartBtn'

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