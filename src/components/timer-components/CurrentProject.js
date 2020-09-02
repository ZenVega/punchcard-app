import React from 'react';
import {useSelector} from 'react-redux'

const CurrentProject = () => {
  const currentProject = useSelector(state=> state.data.currentProject)
  return(
  <div id="currentProject" >
    <h3>{currentProject}</h3>
  </div>
  )
  
}

export default CurrentProject;

