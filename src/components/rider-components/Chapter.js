import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {showSessions, showTimer, showToday} from './../../actions/index'

const Chapter = (props) => {
  const dispatch = useDispatch();

  const hideChapter = (id) => {
  
    dispatch(showSessions(false))
    dispatch(showTimer(false))
    dispatch(showToday(false))
    
    if(id == 1){
      dispatch(showSessions(true))
    } else if(id == 2){
      dispatch(showTimer(true))
    } else if(id == 3){
      dispatch(showToday(true))
    }
  }

  return(
    <div onClick={()=>hideChapter(props.id)} id="chapter">
      <h3>{props.name}</h3>
    </div>
  )
}

export default Chapter;