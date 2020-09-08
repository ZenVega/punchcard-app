import React from 'react';
import './PunchArea.css'
import PunchedHole from './PunchedHole';

const DailyPunch = (props) => {
  let dailyOrder = []; 
  for(let i=0; i < 144 ; i++){
    let digit = Math.round(Math.random()*1)
    dailyOrder.push(digit)
  };


  return(
    <div className="daily-punch">
      {dailyOrder.map((digit, index) => {
        if(digit === 1){
          return <PunchedHole key={index} status="punched-hole-active"/>
        } else {
          return <PunchedHole key={index} status="punched-hole"/>
        }
      })}
    </div>
  )
}

export default DailyPunch;