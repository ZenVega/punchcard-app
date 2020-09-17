import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './PunchArea.css'
import DailyCard from './DailyCard'
import ActivePunchCard from './ActivePunchCard'
import { addDailyCard } from '../../actions';

const PunchCardWrapper = () => {
  const dispatch = useDispatch();
  const sessionIDs = useSelector(state => state.data.sessions.sessionIDs).reverse();
  const cardIDs = useSelector(state => state.data.dailyCards.cardIDs);
  const durationDay = 86400000;
  let days = [];

  useEffect(() => {

    const dateToday = new Date().toString().slice(0,15);
    
    const newDate = new Date(new Date()-durationDay);
    const month = (newDate.getMonth()+1)<10? '0'+ (newDate.getMonth()+1).toString(): (newDate.getMonth()+1).toString();
    const day = newDate.getDate()<10? '0'+ newDate.getDate().toString(): newDate.getDate().toString();
    const jesterday = newDate.getFullYear().toString() + month + day; 
    const firstDayInCardsArray = cardIDs[0];
    console.log(jesterday, firstDayInCardsArray, jesterday-firstDayInCardsArray);

    if(firstDayInCardsArray < jesterday){
      const timeAt0 = new Date(dateToday).getTime();
      const numberofDays = jesterday-firstDayInCardsArray;
      createDailyCards(numberofDays, timeAt0);
    }

    return () => {

    }
  },[cardIDs])
  
  const createDailyCards = (days, until) => {

    if(days>=1){
      for(let i = days; i >= 1; i--){

        const start = until - i * durationDay;
        const end = until - (i-1) * durationDay -1;
        const date = new Date(end);
        const dateForState = date.toString().slice(0,15)
        const sessionsthatDay = sessionIDs.filter(id => id < end && id >= start);
        const dataOfDay = {start, end, date: dateForState, sessionsthatDay}
  
        const month = (date.getMonth()+1)<10? '0'+ (date.getMonth()+1).toString(): (date.getMonth()+1).toString();
        const day = date.getDate()<10? '0'+ date.getDate().toString(): date.getDate().toString();
        const id = [date.getFullYear().toString() + month + day]; 
  
        dispatch(addDailyCard(id, dataOfDay))
      }
    }

    
  }

  return(
    <div className="punch-card-wrapper">
      {days.map( day => (
      <DailyCard/>
      ))}
      <ActivePunchCard/>
    </div>
  )
}

export default PunchCardWrapper;