
import React, {useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {toggleStartBtn, updateRunningTime, addNewSession, updateSession, toggleNoProjectEntered} from './../../actions/index'
import CurrentProject from './CurrentProject';
const { v4: generateID } = require('uuid');


const StartBtn = () => {
  const dispatch = useDispatch();

  //CHANGE BUTTON STATE

  let buttonStateActivity = useSelector(state => state.timer.startBtnStateActive);
  let currentTime = useSelector(state => state.timer.timeRunning);
  let currentProject = useSelector(state => state.data.currentProject);
  console.log(currentProject)
 
  let buttonState = 'start-btn-inactive'
  if(buttonStateActivity){
    buttonState = 'start-btn-active'
  } else {
    buttonState = 'start-btn-inactive'
  }

  //START TIMER

  let {seconds} = currentTime;
  let {minutes} = currentTime;
  let {hours} = currentTime;
  
  const [timerActive, setTimerActive] = useState(false);
  const [currentSession, setCurrentSession] = useState('');
  
  useEffect(() => {
    let timerRunning = null;
    if (buttonStateActivity) {
      timerRunning = setInterval(incrementTimer, 1000);
    } else if (!buttonStateActivity) {
      clearInterval(timerRunning);
    }
    return () => clearInterval(timerRunning);
  });

  const incrementTimer = () => {
    seconds++;

    if(seconds/60 === 1){
      seconds = 0;
      minutes++;
      
      if(minutes/60 === 1){
        minutes = 0;
        hours++;
      }
    }

    dispatch(updateRunningTime({
      seconds,
      minutes,
      hours
    }))
  }

  const toggleTimer = () => {
    if(timerActive){
      setTimerActive(false);
      dispatch(toggleStartBtn(false));

      const date = new Date().getTime();
      const id = currentSession
      dispatch(updateSession(id, date))

    } else {
      if(currentProject === ''){
        console.log('no current project')
        dispatch(toggleNoProjectEntered(true));
        setTimerActive(false);
        return
        
      } else { 
        dispatch(toggleStartBtn(true));
        dispatch(toggleNoProjectEntered(false));
        const date = new Date();
        const id = date.getTime();
        const start = id;
        const inWords = date.toISOString();
        setCurrentSession(id);
        
        dispatch(addNewSession(
          id,{
            project: currentProject,
            start,
            inWords
          }))
          
        setTimerActive(true);
        seconds = 0;
        minutes = 0;
        hours = 0;

        dispatch(updateRunningTime({
          seconds,
          minutes,
          hours
        }))
        
      }
    }
  }
  

const clickHandler = () => {
  toggleTimer(); 

}   


  return(
    <div className={buttonState} onClick={clickHandler}>
      START
    </div>
  )
}

export default StartBtn;