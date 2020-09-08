import React from 'react'
import { useSelector } from 'react-redux';
import './PunchArea.css'
import DailyPunch from './DailyPunch'
import ActivePunchCard from './ActivePunchCard'

const PunchCardWrapper = () => {

  return(
    <div className="punch-card-wrapper">
      <DailyPunch/>
      <ActivePunchCard/>
    </div>
  )
}

export default PunchCardWrapper;