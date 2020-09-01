import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {showSessions, showTimer, showToday} from './../../actions/index'

import './Rider.css'
import Chapter from './Chapter'

const Rider = () => {
  const dispatch = useDispatch();
  
  return(
    <div id="rider">
     <Chapter id="1" name="Sessions" />
     <Chapter id="2" activate="showTimer" name="Timer" />
     <Chapter id="3" activate="showToday" name="Today's Session" />
    </div>
  )
}

export default Rider;