import React from 'react';
import './PunchArea.css'
import DailyPunch from './DailyPunch'

const PunchArea = (props) => {
  return(
    <div className="punch-area">
      <h1>PUNCH CARD</h1>
      <DailyPunch/>
    </div>
  )
}

export default PunchArea;