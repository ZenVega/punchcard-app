import React from 'react';
import './Setting.css'
import ProjectTag from './ProjectTag'
import {useSelector} from 'react-redux'

const ProjectList = (props) => {

  const projectIDs = useSelector(state => state.data.projects.projectIDs);
  const projects = useSelector(state => state.data.projects);
  const projectSearch = useSelector(state => state.data.projectSearch);

  const projectsFiltered = projectIDs.filter(id => projects[id].name.includes(projectSearch));
  console.log(projectsFiltered)

  return(
  <div class="project-list" >
    {projectsFiltered.map( (id,index) => (
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