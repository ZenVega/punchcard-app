import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './PunchArea.css'
import DailyCard from './DailyCard'
import ActivePunchCard from './ActivePunchCard'
import { addDailyCard } from '../../actions';

const PunchCardWrapper = () => {
  
  const durationDay = 86400000;

  const dispatch = useDispatch();
  const sessionIDs = useSelector(state => state.data.sessions.sessionIDs).reverse();
  const cardIDs = useSelector(state => state.data.dailyCards.cardIDs);

  const [cardsLoaded, setCardsLoaded] = useState([]);
  const [dateToday, setDateToday] = useState('');

  useEffect(() => {
    const getDate = new Date();
    setDateToday(createDateString(getDate));
    
    const jesterdayUTC = new Date(new Date()-durationDay);
    const jesterdayString = createDateString(jesterdayUTC);
    const firstDayInCardsArray = cardIDs[0];
    
    if(firstDayInCardsArray < jesterdayString){
      const timeAt0 = new Date(getDate).getTime() - durationDay;
      const numberofDays = jesterdayString-firstDayInCardsArray;
      createDailyCards(numberofDays, timeAt0);
    }
    
    loadDailyCards();
    return () => {


    }
  },[cardIDs])
  

  const createDailyCards = (days, until) => {
    if(days>=1){
      for(let i = days; i >= 1; i--){

        const start = until - i * durationDay;
        const end = until - (i-1) * durationDay -1;
        const date = new Date(end);
        const id = createDateString(date);

        const sessionsThatDay = sessionIDs.filter(id => id < end && id >= start);
        if(sessionsThatDay.length === 0){
          continue;
        }
        
        const dateForState = date.toString().slice(0,15)
        const dataOfDay = {start, end, date: dateForState, sessionsThatDay}
  
        dispatch(addDailyCard(id, dataOfDay))
      }
    }
  }

  const createDateString = date =>{
    const month = (date.getMonth()+1)<10? '0'+ (date.getMonth()+1).toString(): (date.getMonth()+1).toString();
    const day = date.getDate()<10? '0'+ date.getDate().toString(): date.getDate().toString();
    return [date.getFullYear().toString() + month + day]; 
  }

  const loadDailyCards = () => {
    console.log(cardIDs)
    console.log(cardsLoaded)
    let cardsToLoad = [];
    const lastDayLoaded = cardsLoaded.length === 0?undefined:cardsLoaded[cardsLoaded.length-1];
    if(!lastDayLoaded){
      console.log('undefined')
      for(let i = 0; i < 2; i++){
        cardsToLoad.push(cardIDs[i])
      }
      console.log(cardsToLoad)
      setCardsLoaded(cardsToLoad)
    } else {
      const index = cardIDs.findIndex(id => id === lastDayLoaded)+1;
      for(let i = index; i < index+5; i++){
        cardsToLoad.push(cardIDs[i])
      }
      setCardsLoaded([...cardsLoaded,cardsToLoad])
    }
    console.log(cardsLoaded)
  }

  return(
    <div className="punch-card-wrapper">
      {cardsLoaded.map( (card, index) => (
      <DailyCard
        key ={index}/>
      ))}
      <ActivePunchCard/>
    </div>
  )
}

export default PunchCardWrapper;