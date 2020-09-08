import React from 'react';
import CurrentProject from './CurrentProject'
import { useDispatch } from 'react-redux';
import { showProjectAdder, showProjectList } from '../../actions';


const ProjectSwitch = () => {

  const dispatch = useDispatch();

  return(
    <div className="project-switch">
      <CurrentProject/>
      <div 
        id="change-project-btn" 
        className="project-switch-btn"
        onClick={()=>dispatch(showProjectList(true))}
        ><span role="img" aria-label="Project-Switch">↔️</span></div>
      <div 
        id="add-project-btn" 
        className="project-switch-btn"
        onClick={()=>dispatch(showProjectAdder(true))}
        >+</div>
    </div>
  )
}

export default ProjectSwitch;