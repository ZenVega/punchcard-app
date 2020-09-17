import { combineReducers } from 'redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './riderReducers'
import {startBtnStateActive, timeRunning, noProjectEnteredError} from './timerReducers'
import {projects, currentProject, projectSearch, sessions, dailyCards} from './dataReducers'
import {showProjectAdder, showProjectList} from './settingReducers'

const data = combineReducers({
  currentProject,
  projects,
  projectSearch,
  sessions,
  dailyCards
})

const settings = combineReducers({
  showProjectAdder,
  showProjectList
})

const rider = combineReducers({
  showSessions,
  showTimer,
  showToday,
  setRiderBtn
})

const timer = combineReducers({
  startBtnStateActive,
  timeRunning,
  noProjectEnteredError
})


const allReducers = combineReducers({
  data,
  settings,
  rider,
  timer
});
export default allReducers;