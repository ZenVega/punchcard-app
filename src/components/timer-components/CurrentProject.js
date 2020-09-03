import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {showProjectList} from './../../actions/index'

const CurrentProject = () => {
  const dispatch = useDispatch();
  const currentProjectID = useSelector(state=> state.data.currentProject);
  const projects = useSelector(state=> state.data.projects);

  const projectTitle = currentProjectID? projects[currentProjectID].name : 'add new project';

  
  return(
  <div id="current-project" >
    <input
      id="current-project-input"
      placeholder={projectTitle}
      onClick={()=>dispatch(showProjectList(true))}
    />
  </div>
  )
  
}

export default CurrentProject;

