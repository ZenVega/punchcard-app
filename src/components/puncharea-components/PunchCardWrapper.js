import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import './PunchArea.css'
import DailyCards from './DailyCards'
import ActivePunchCard from './ActivePunchCard'

const PunchCardWrapper = () => {
  const sessionIDs = useSelector(state => state.data.sessions.sessionIDs).reverse();
  const sessions = useSelector(state => state.data.sessions);
  const durationDay = 86400000;
  const [cardsArray, setCardsArray] = useState([]);

  useEffect(() => {

    const dateToday = new Date().toString().slice(0,15);
    const timeAt0 = new Date(dateToday).getTime() + durationDay;
    const fiveDaysAgo = timeAt0 - (5*durationDay);
    createDailyPunches(fiveDaysAgo, timeAt0)

    return () => {

    }
})

  const createDailyPunches = (from, until) => {
    const numberOfDays = (until - from)/durationDay;
    let days = [];

    for(let i = 1; i < numberOfDays; i++){
      const start = until - i * durationDay;
      const end = until - (i-1) * durationDay -1;
      const date = new Date(start).toString().slice(0,15);
      const sessionsthatDay = sessionIDs.filter(id => id < end && id >= start);
      days.push({start, end, date, sessionsthatDay})
    }
    
    console.log(days)
  }

  return(
    <div className="punch-card-wrapper">
      <DailyCards/>
      <ActivePunchCard/>
    </div>
  )
}

export default PunchCardWrapper;