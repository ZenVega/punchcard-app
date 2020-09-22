import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {showProjectList, updateProjectSearch} from './../../actions/index'

const CurrentProject = () => {
  const dispatch = useDispatch();
  const currentProjectID = useSelector(state=> state.entities.currentProject);
  const projects = useSelector(state => state.entities.projects.byID);
  const noProjectEnteredError = useSelector(state => state.timer.noProjectEnteredError);

  const projectTitle = currentProjectID? projects[currentProjectID].name : 'add new project';

  
  return(
  <div id="current-project" >
    <input
      id="current-project-input"
      placeholder={projectTitle}
      onClick={()=>dispatch(showProjectList(true))}
      onChange={e=>dispatch(updateProjectSearch(e.target.value))}
    />
    {noProjectEnteredError && !currentProjectID && <h6 id="current-project-input-error">What Project are u working on</h6>}
  </div>
  )
  
}

export default CurrentProject;

