
import React, {useState, useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {toggleStartBtn, updateRunningTime} from './../../actions/index'

const StartBtn = () => {
  const dispatch = useDispatch();

  //CHANGE BUTTON STATE

  let buttonStateActivity = useSelector(state => state.timer.startBtnStateActive);
  console.log('activity', buttonStateActivity)
  let currentTime = useSelector(state => state.timer.timeRunning);
 
  let buttonState = 'startBtnInactive'
  if(buttonStateActivity){
    buttonState = 'startBtnActive'
  } else {
    buttonState = 'startBtnInactive'
  }

  //START TIMER

  let {seconds} = currentTime;
  let {minutes} = currentTime;
  let {hours} = currentTime;
  let timerRunning = null;
  
  const [timerActive, setTimerActive] = useState(false);

  const toggleTimer = () => {
    if(timerActive){
      setTimerActive(false)
    } else {
      setTimerActive(true);
    }
  }

useEffect(() => {
  if (buttonStateActivity) {
    console.log('active')
    seconds = currentTime.seconds;
    minutes = currentTime.minutes;
    hours = currentTime.hours;
    timerRunning = setInterval(incrementTimer, 1000);
  } else if (!buttonStateActivity) {
    console.log('inactive')
    clearInterval(timerRunning);
  }
  return () => clearInterval(timerRunning);
}, []);

const incrementTimer = () => {
  seconds++;

  if(seconds/60 === 0){
    seconds = 0;
    minutes++;
    
    if(minutes/60 === 0){
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

const clickHandler = () => {
  toggleTimer(); 
  dispatch(toggleStartBtn());
}   


  return(
    <div className={buttonState} onClick={clickHandler}>
      START
    </div>
  )
}

export default StartBtn;