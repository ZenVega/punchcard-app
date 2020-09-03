import React from 'react';
import './Setting.css'
import ProjectTag from './ProjectTag'
import {useSelector} from 'react-redux'

const ProjectList = () => {

  const projectIDs = useSelector(state => state.data.projects.projectIDs);
  const projects = useSelector(state => state.data.projects);

  return(
  <div class="project-list" >
    {projectIDs.map( (id,index) => (
      <ProjectTag 
        key={index}
        id={id}
        name={projects[id].name}
      />
    ))}
  
  </div>
  )
  
}

export default ProjectList;