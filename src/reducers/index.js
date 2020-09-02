import { combineReducers } from 'redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './riderReducers'
import {startBtnStateActive, timeRunning} from './timerReducers'

const rider = combineReducers({
  showSessions,
  showTimer,
  showToday,
  setRiderBtn
})

const timer = combineReducers({
  startBtnStateActive,
  timeRunning
})


const allReducers = combineReducers({
  rider,
  timer
});
export default allReducers;