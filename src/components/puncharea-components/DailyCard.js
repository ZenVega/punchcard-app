import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './PunchArea.css'
import PunchedHole from './PunchedHole';
import {createObjectWithDailySessions, getSessionsOnDay, getPunchArray} from '../../selectors/index'

const DailyCard = (props) => {


  const day = props.day
  const sessionOnDay = useSelector(createObjectWithDailySessions(props.day));
  console.log(sessionOnDay)





  const datePattern = props.day.slice(0,4) + '-' + props.day.slice(4,6) + '-' + props.day.slice(6,8)
  const dateToday = new Date(datePattern);
  const dateStringToRender = dateToday.toString().slice(0,10)
  



/*     export const getPunchArray = (state, day) => {
      const sessions = getSessionsOnDay(state, day);
      let dailySequence = new Array(288);
      console.log(sessions)
    }
  }, [props.day]); */
/*   
  const generatePunchArray = () => {
    //generate fragments for that day
    const start = card.start;
    for (let i = 1; i <= 288; i++){
      dailySequence.push(start+ i*300000)
    }

    const sessionIDs = card.sessionsThatDay;
    let sessions = [];
    if(sessionIDs){sessionIDs.map(id => sessions.push(allSessions[id]))}
    const fragmentsPerSession = sessions.map(session => Math.floor(session.duration/300000))
    
    let indexesOfDailySequence = []; 
    sessions.map(session => {
      return indexesOfDailySequence.push(dailySequence.findIndex(timeStamp => {return timeStamp > session.start})-1)
    })
    
    indexesOfDailySequence.map((indexofDS, index) => {
      for(let i=0; i <= fragmentsPerSession[index]; i++){
        dailySequence.splice(indexofDS, 0,0)
      }
      dailySequence.splice(-fragmentsPerSession,fragmentsPerSession)
    })
  }

  generatePunchArray() */


  return(
    <div className="daily-card">
      <h3 className="date-tag">{dateStringToRender}</h3>
      <div className="daily-punch">
        {/* {dailySequence.map((digit, index) => {
          if(digit === 0){
            return <PunchedHole key={index} status="punched-hole-active"/>
          } else {
            return <PunchedHole key={index} status="punched-hole"/>
          }
        })} */}
      </div>
    </div> 
  )
}

export default DailyCard;