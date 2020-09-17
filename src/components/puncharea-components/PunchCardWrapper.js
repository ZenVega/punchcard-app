import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import './PunchArea.css'
import DailyCard from './DailyCard'
import ActivePunchCard from './ActivePunchCard'

const PunchCardWrapper = () => {
  const sessionIDs = useSelector(state => state.data.sessions.sessionIDs).reverse();
  const durationDay = 86400000;
  let days = [];

  useEffect(() => {

    const dateToday = new Date().toString().slice(0,15);
    const timeAt0 = new Date(dateToday).getTime() + durationDay;
    const fiveDaysAgo = timeAt0 - (5*durationDay);
    createDailyCards(fiveDaysAgo, timeAt0);
    return () => {
    }
  })
  
  const createDailyCards = (from, until) => {
    const numberOfDays = (until - from)/durationDay;
    for(let i = 1; i < numberOfDays; i++){
      const start = until - i * durationDay;
      const end = until - (i-1) * durationDay -1;
      const date = new Date(start).toString().slice(0,15);
      const sessionsthatDay = sessionIDs.filter(id => id < end && id >= start);
      const nextDay = {start, end, date, sessionsthatDay}
      days.push(nextDay)
      
    }
    console.log(days)
    /* setCardsArray(days); */
    
  }

  return(
    <div className="punch-card-wrapper">
      {days.map( day => (
      <DailyCard 
        key={day.date}
        sessionsthatDay={day.sessionsthatDay}
      />
      ))}
      <ActivePunchCard/>
    </div>
  )
}

export default PunchCardWrapper;