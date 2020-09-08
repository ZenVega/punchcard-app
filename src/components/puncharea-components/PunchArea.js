import React from 'react';
import './PunchArea.css'
import PunchCardWrapper from './PunchCardWrapper'

const PunchArea = (props) => {
  return(
    <div className="punch-area">
      <span id="punch-area-header"><h1>PUNCH </h1><h1> CARD</h1></span>
      <PunchCardWrapper/>
    </div>
  )
}

export default PunchArea;