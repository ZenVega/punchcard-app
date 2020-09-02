import React from 'react';
import CurrentProject from './CurrentProject'
const ProjectSwitch = () => {
  return(
    <div className="projectSwitch">
      <CurrentProject/>
      <div id="changeProjectBtn" className="projectSwitchBtn">↔️</div>
      <div id="addProjectBtn" className="projectSwitchBtn">+</div>
    </div>
  )
}

export default ProjectSwitch;