import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import './PunchArea.css'
import DailyCard from './DailyCard'
import ActivePunchCard from './ActivePunchCard'

const PunchCardWrapper = () => {
  
  const cardIDs = useSelector(state => state.data.dailyCards.cardIDs);
  const [cardsLoaded, setCardsLoaded] = useState([]);
  const [formerCardIDs, setFormerCardIDs] = useState([]);
  
  
  useEffect(() => {
    checkForChanges();
    loadDailyCards();
    
    return () => {
      
    }
  })
  
  const loadDailyCards = () => {
    let cardsToLoad = [];
    const lastDayLoaded = cardsLoaded.length === 0?undefined:cardsLoaded[cardsLoaded.length-1];
    
    if(!lastDayLoaded){
      for(let i = 0; i < 2; i++){
        cardsToLoad.push(cardIDs[i])
      }
      setCardsLoaded(cardsToLoad)
    } else if(lastDayLoaded === cardIDs[0]){
      return;
    } else {
      const index = cardIDs.findIndex(id => id === lastDayLoaded)+1;
      for(let i = index; i < index+5; i++){
        if(cardIDs[i]){
          setCardsLoaded([...cardsLoaded,cardIDs[i]])
        }
      }
    }
    console.log(cardsLoaded)
  }

  const checkForChanges = () => {
    if(formerCardIDs !==cardIDs){
      setCardsLoaded([])
    }
    setFormerCardIDs(cardIDs);
  }

  return(
    <div className="punch-card-wrapper">
      {cardsLoaded && cardsLoaded.map( (card, index) => (
      <DailyCard
        key ={index}/>
      ))}
      <ActivePunchCard/>
    </div>
  )
}

export default PunchCardWrapper;