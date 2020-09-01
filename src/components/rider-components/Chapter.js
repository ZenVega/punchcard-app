import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './../../actions/index'

const Chapter = (props) => {
  const dispatch = useDispatch();

  const switchChapter = (id) => {

    dispatch(showSessions(false))
    dispatch(showTimer(false))
    dispatch(showToday(false))
    
    if(id == 1){
      dispatch(showSessions(true))
      dispatch(setRiderBtn({
        sessions: 'riderBtn active',
        timer: 'riderBtn',
        today: 'riderBtn'
      }))
    } else if(id == 2){
      dispatch(showTimer(true))
      dispatch(setRiderBtn({
        sessions: 'riderBtn',
        timer: 'riderBtn active',
        today: 'riderBtn'
      }))
    } else if(id == 3){
      dispatch(showToday(true))
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