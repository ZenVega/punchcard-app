import React, {useRef, useEffect} from 'react';
import './Setting.css'
import ProjectTag from './ProjectTag'
import {useSelector, useDispatch} from 'react-redux'
import {showProjectList} from './../../actions/index'

const ProjectList = () => {
  let listRef = useRef(null);
  const dispatch = useDispatch();
  const projectIDs = useSelector(state => state.data.projects.projectIDs);
  const projects = useSelector(state => state.data.projects);
  const projectSearch = useSelector(state => state.data.projectSearch);

  const projectsFiltered = projectIDs.filter(id => projects[id].name.includes(projectSearch));

  useEffect(()=>{
    const handler = (e)=>{
      if(!listRef.current.contains(e.target)){
        dispatch(showProjectList(false))
      }
    }
    document.addEventListener('click', handler);
    return ()=> document.removeEventListener('click', handler)
  })

  return(
  <div ref={listRef} className="project-list" >
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