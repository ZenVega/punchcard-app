import { combineReducers } from 'redux';

import {showSessions, showTimer, showToday} from './riderReducers'

const rider = combineReducers({
  showSessions,
  showTimer,
  showToday
})


const allReducers = combineReducers({
  rider/* ,
  sessions,
  timer,
  todayssession */
});
export default allReducers;