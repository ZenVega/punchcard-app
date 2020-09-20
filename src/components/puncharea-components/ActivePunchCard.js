import React, {useEffect} from 'react';
import './PunchArea.css'
import PunchedHole from './PunchedHole';

const ActivePunchCard = (props) => {
  const dateToday = new Date().toString().slice(0,15);
  let dailyOrder = []; 
  for(let i=0; i < 288 ; i++){
    let digit = Math.round(Math.random()*1)
    dailyOrder.push(digit)
  };

  return(
    <div className="active-punch-card">
      <h3 className="date-tag">Today is {dateToday}</h3>
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

export default ActivePunchCard;