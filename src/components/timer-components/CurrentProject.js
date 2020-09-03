import React from 'react';
import {useSelector} from 'react-redux'

const CurrentProject = () => {
  const currentProjectID = useSelector(state=> state.data.currentProject);
  const projects = useSelector(state=> state.data.projects);

  const projectTitle = currentProjectID? projects[currentProjectID].name : 'add new project';

  
  return(
  <div id="current-project" >
    <h3>{projectTitle}</h3>
  </div>
  )
  
}

export default CurrentProject;

