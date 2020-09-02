import { combineReducers } from 'redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './riderReducers'
import {startBtnStateActive, timeRunning} from './timerReducers'
import {projects, currentProject} from './dataReducers'

const data = combineReducers({
  currentProject,
  projects
})

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
  data,
  rider,
  timer
});
export default allReducers;