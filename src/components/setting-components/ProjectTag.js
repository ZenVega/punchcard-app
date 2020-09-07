import React from 'react';
import {useDispatch} from 'react-redux'
import {showProjectList, changeCurrentProject} from './../../actions/index'

const ProjectTag = (props) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(changeCurrentProject(props.id))
    dispatch(showProjectList(false))
  }

  return(
  <div className="project-tag" >
    <h3 
      className="project-tag-name"
      onClick={clickHandler}
    >{props.name}</h3>
  </div>
  )
  
}

export default ProjectTag;