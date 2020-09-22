
import React, {useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {toggleStartBtn, updateRunningTime, addNewSession, updateSession, toggleNoProjectEntered} from './../../actions/index';
import { v4 as generateID } from 'uuid';


const StartBtn = () => {
  const dispatch = useDispatch();

  //CHANGE BUTTON STATE

  const buttonStateActivity = useSelector(state => state.timer.startBtnStateActive);
  const currentTime = useSelector(state => state.timer.timeRunning);
  const currentProject = useSelector(state => state.entities.currentProject);
  const sessions = useSelector(state => state.entities.sessions.byID)

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

      const stopTime = new Date()
      const date = stopTime.getTime();
      const id = currentSession;
      const duration = date-sessions[id].start;

      if(new Date(currentSession).getDay() === new Date(stopTime).getDay()){
        const newTime = new Date(stopTime).toISOString().substring(0, 10);
      }
      dispatch(updateSession(id, {end: date, duration: duration}))

    } else {

      if(currentProject === ''){
        dispatch(toggleNoProjectEntered(true));
        setTimerActive(false);
        return
        
      } else { 
        dispatch(toggleStartBtn(true));
        dispatch(toggleNoProjectEntered(false));
        const newDate = new Date();
        const id = generateID();
        const start = newDate.getTime();
        const date = parseInt(newDate.toISOString().substring(0, 10).replace('-', '').replace('-', ''));
        setCurrentSession(id);
        
        dispatch(addNewSession(
          id,{
            project: currentProject,
            start,
            date
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