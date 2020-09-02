import React from 'react';
import {useSelector} from 'react-redux'

const TimeCounter = () => {
  let timeRunning = useSelector(state => state.timer.timeRunning);

  let {seconds} = timeRunning;
  let {minutes} = timeRunning;
  let {hours} = timeRunning;

  let displaySeconds = 0;
  let displayMinutes = 0;
  let displayHours = 0;

  if(seconds<10){
    displaySeconds = '0' +seconds.toString();
  } else {
    displaySeconds = seconds.toString();
  }

  if(minutes<10){
    displayMinutes = '0' + minutes.toString();
  } else {
    displayMinutes = minutes.toString();
  }

  if(hours<10){
    displayHours = '0' + hours.toString();
  } else {
    displayHours = hours.toString();
  }

  return(
    <div id="TimeCounter">
      {displayHours + ':' + displayMinutes + ':' + displaySeconds}
    </div>
  )
}

export default TimeCounter;