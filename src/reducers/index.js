import { combineReducers } from 'redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './riderReducers'

const rider = combineReducers({
  showSessions,
  showTimer,
  showToday,
  setRiderBtn
})


const allReducers = combineReducers({
  rider/* ,
  sessions,
  timer,
  todayssession */
});
export default allReducers;