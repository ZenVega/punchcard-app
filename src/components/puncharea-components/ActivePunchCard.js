import React from 'react';
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

    </div>
  )
}

export default ActivePunchCard;