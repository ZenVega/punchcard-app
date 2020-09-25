import React, {useState} from 'react'
import './PunchArea.css'
import ActivePunchCard from './ActivePunchCard'
import DailyCard from './DailyCard'
import {getWorkingDays} from '../../selectors'
import {useSelector} from 'react-redux'



const PunchCardWrapper = () => {

  const workingDays = useSelector(state => getWorkingDays(state));
  const lastFive = workingDays.length>3? workingDays.slice(0,3):workingDays.slice(0,workingDays.length);
  const [daysLoaded, setDaysLoaded] = useState(lastFive);
  
  return(
    <div className="punch-card-wrapper">
      <ActivePunchCard/>
      {daysLoaded && daysLoaded.map((day, index) => (
      <DailyCard
        key = {index}
        day = {day}/>
      ))}
    </div>
  )
}

export default PunchCardWrapper;