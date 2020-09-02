import React from 'react';
import { useDispatch } from 'react-redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './../../actions/index'

const Chapter = (props) => {
  const dispatch = useDispatch();

  const switchChapter = (id) => {

    if(id == 1){
      dispatch(showSessions(true))
      dispatch(showTimer(false))
      dispatch(showToday(false))
      dispatch(setRiderBtn({
        sessions: 'riderBtn active',
        timer: 'riderBtn',
        today: 'riderBtn'
      }))
    } else if(id == 2){
      dispatch(showTimer(true))
      dispatch(showSessions(false))
      dispatch(showToday(false))
      dispatch(setRiderBtn({
        sessions: 'riderBtn',
        timer: 'riderBtn active',
        today: 'riderBtn'
      }))
    } else if(id == 3){
      dispatch(showToday(true))
      dispatch(showSessions(false))
      dispatch(showTimer(false))
      dispatch(setRiderBtn({
        sessions: 'riderBtn',
        timer: 'riderBtn',
        today: 'riderBtn active'
      }))
    }
  }

  return(
    <div className={props.className} onClick={()=>switchChapter(props.id)} >
      <h3>{props.name}</h3>
    </div>
  )
}

export default Chapter;