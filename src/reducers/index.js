import { combineReducers } from 'redux';

import {showSessions, showTimer, showToday, setRiderBtn} from './riderReducers'
import {startBtnStateActive, timeRunning} from './timerReducers'
import {projects, currentProject} from './dataReducers'
import {showProjectAdder, showProjectList} from './settingReducers'

const data = combineReducers({
  currentProject,
  projects
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
  timeRunning
})


const allReducers = combineReducers({
  data,
  settings,
  rider,
  timer
});
export default allReducers;