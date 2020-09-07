import React, {useState, useEffect} from 'react';
import './Setting.css'
import {useSelector, useDispatch} from 'react-redux'
import {showProjectAdder, addNewProject, changeCurrentProject} from './../../actions/index'
const { v4: generateID } = require('uuid');


const ProjectAdder = () => {
  
  const dispatch = useDispatch();
  const projects = useSelector(state=> state.data.projects)
  const projectSearch = useSelector(state => state.data.projectSearch)
  const [projectName, setProjectName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [nameError, setNameError] = useState('');
  
  useEffect(()=>{
    setProjectName(projectSearch);
  }, [projectSearch])

  const generateNewProject = () => {
    let match = projects.projectIDs.find(id => projects[id].name === projectName);

    if(match){
      setNameError("A project with this name already Exists");
      match = !match;
      return
    } else {
      const id = generateID();
      const date = new Date().toISOString();
      dispatch(addNewProject(
        id, {
          name: projectName,
          info: additionalInfo,
          created: date,
          lastUsed: date
        }
      ))
      dispatch(changeCurrentProject(id))
      dispatch(showProjectAdder(false));
    }
  }

  const clickHandler = () => {
    
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
        value={projectName}
        />
      <h5 id="name-error">{nameError}</h5>
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

