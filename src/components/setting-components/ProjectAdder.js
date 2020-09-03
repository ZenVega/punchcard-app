import React, {useState} from 'react';
import './Setting.css'
import {useDispatch} from 'react-redux'
import {showProjectAdder, addNewProject, changeCurrentProject} from './../../actions/index'
const { v4: generateID } = require('uuid');


const ProjectAdder = () => {
  const dispatch = useDispatch();

  const [projectName, setProjectName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');


  const generateNewProject = () => {
    const id = generateID();
    dispatch(addNewProject(
      id, {
        name: projectName,
        info: additionalInfo
      }
    ))
    dispatch(changeCurrentProject(id))
  }

  const clickHandler = () => {
    dispatch(showProjectAdder(false));
    generateNewProject()
  }
  
    const nameChangeHandler = e => {
      setProjectName(e.target.value);
    }
  
    const inputChangeHandler = e => {
      setAdditionalInfo(e.target.value);
    }
  


  return(
  <div className="project-adder" >
    <div 
      className="exit-btn"
      onClick={()=>dispatch(showProjectAdder(false))}
      >+</div>
    <div className="content-wrapper">
      <h3>Project name</h3>
      <input 
        className="setting-input" 
        id="project-name-input" 
        type="text"
        onChange={nameChangeHandler}
        />
    </div>
    <div className="content-wrapper">
      <h3>Additional info</h3>
      <textarea 
        className="setting-input" 
        id="project-info-input" 
        type="text" 
        rows="10" 
        cols="30"
        onChange={inputChangeHandler}
        />
    </div>
    <div 
      className="submit-btn"
      onClick={clickHandler}
      >submit</div>
  </div>
  )
}

export default ProjectAdder;

