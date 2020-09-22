
import React, {useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {toggleStartBtn, updateRunningTime, addNewSession, updateSession, toggleNoProjectEntered} from './../../actions/index'


const StartBtn = () => {
  const dispatch = useDispatch();

  //CHANGE BUTTON STATE

  let buttonStateActivity = useSelector(state => state.timer.startBtnStateActive);
  let currentTime = useSelector(state => state.timer.timeRunning);
  let currentProject = useSelector(state => state.entities.currentProject);

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
      const duration = date-id;

      if(new Date(currentSession).getDay() === new Date(stopTime).getDay()){
        const newTime = new Date(stopTime).toISOString().substring(0, 10);
        const beginningOfDay = new Date(newTime)
        console.log(beginningOfDay)
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
        const id = newDate.getTime();
        const start = id;
        const date = newDate.toISOString().substring(0, 10);
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