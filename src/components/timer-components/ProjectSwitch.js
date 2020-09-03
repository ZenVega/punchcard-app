import React from 'react';
import CurrentProject from './CurrentProject'
const ProjectSwitch = () => {
  return(
    <div className="project-switch">
      <CurrentProject/>
      <div id="change-project-btn" className="project-switch-btn">↔️</div>
      <div id="add-project-btn" className="project-switch-btn">+</div>
    </div>
  )
}

export default ProjectSwitch;