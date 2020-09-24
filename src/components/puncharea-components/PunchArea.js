import React from 'react'
import { useSelector } from 'react-redux';
import './PunchArea.css'

import PunchCardWrapper from './PunchCardWrapper';
import {getSessionsOnDay} from '../../selectors/index'


const PunchArea = () => {
  const sessionOnDay = useSelector(state => getSessionsOnDay(state, '20200918'));
  console.log(sessionOnDay)

  
  /* const durationDay = 86400000; */

/*   const dispatch = useDispatch();
  const sessionIDs = useSelector(state => state.entities.sessions.allIDs).reverse();
  const sessions = useSelector(state => state.entities.sessions.byID);
  
  const createDateString = date =>{
  const month = (date.getMonth()+1)<10? '0'+ (date.getMonth()+1).toString(): (date.getMonth()+1).toString();
  const day = date.getDate()<10? '0'+ date.getDate().toString(): date.getDate().toString();
  return [date.getFullYear().toString() + month + day]; 
  } */

/*   const getDate = new Date();
  
  const jesterdayUTC = new Date(new Date()-durationDay);
  const jesterdayString = createDateString(jesterdayUTC);
  const firstDayInCardsArray = cardIDs[0];
  
   */
  /* const createDailyCards = (days, until) => {
    if(days>=1){
      for(let i = days; i >= 1; i--){
        
        const start = until - i * durationDay;
        const end = until - (i-1) * durationDay -1;
        const date = new Date(end);
        const id = generateID();
        
        const sessionsThatDay = sessionIDs.filter(id => sessions[id].start < end && sessions[id].start >= start);
        if(sessionsThatDay.length === 0){
          continue;
        }
        
        const dateForState = date.toString().slice(0,15)
        const dataOfDay = {start, end, date: dateForState, sessionsThatDay}
        
        dispatch(addDailyCard(id, dataOfDay))
      }
    }
  } */
  

  return(
    <div className="punch-area">
      <span id="punch-area-header"><h1>PUNCH </h1><h1> CARD</h1></span>
      <PunchCardWrapper/>
    </div>
  )
}


export default PunchArea