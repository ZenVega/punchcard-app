import { useMemo } from 'react'
import { createSelector } from 'reselect'
import { useSelector } from 'react-redux';
/* 
const projectIDselector = state => state.entities.projects.allIDs;
const projectSelector = state => state.entities.projects.byID;
const daysDisplayed = state => state.entities.daysDisplayed;
 */

const state = state => state
const sessionIDselector = state => state.entities.sessions.allIDs;
const sessionSelector = state => state.entities.sessions.byID;

export const sessionIDsOlderThanToday = createSelector( 
  [sessionIDselector, sessionSelector],
  (IDs, sessions) => {
    const today = new Date().toISOString().substring(0, 10).replace('-', '').replace('-', '');
    return IDs.filter(id => sessions[id].date !== today)
  }
)

export const sessionsOlderThanToday = createSelector(
  [sessionIDsOlderThanToday, sessionSelector],
  (IDs, sessions) => {
    let obj = {};
    IDs.map(id =>  obj[id] = sessions[id])
    return obj
  }
)

export const getWorkingDays = createSelector(
  [sessionsOlderThanToday, sessionIDsOlderThanToday], 
  (sessions, IDs) => {
    const allDays = IDs.map(id => sessions[id].date);
    let workDays = [];
    allDays.forEach(day => {
     if(workDays.indexOf(day) === -1){
       workDays.push(day)
     }
    })
    return workDays.reverse()
  }
)

export const getWorkdaysIncludingSessions = createSelector(
  [getWorkingDays,sessionsOlderThanToday, sessionIDsOlderThanToday],
  (workingDays,sessions, IDs) => {
    let workingDaySessions = {};
    workingDays.forEach(day => {
      let sessionsToAd = IDs.filter(id => sessions[id].date === day)
      workingDaySessions[day] = sessionsToAd
    })
    return workingDaySessions
  }
)


export const getSessionsOnDay = day => createSelector(
  [state],
  (state) => {
    const getWDays = getWorkdaysIncludingSessions;
    console.log(getWDays(state)[day])
    return getWDays(state)[day]
  }
)

export const createObjectWithDailySessions = (day) => createSelector(
  [sessionsOlderThanToday,getWorkdaysIncludingSessions],
  (olderSessions, WDincludingSessions) => {
    const sessionOnDay = useSelector(getSessionsOnDay(day))
    let sessions = {};
    sessionOnDay.map(id => sessions[id] = olderSessions[id])
    console.log(sessions)
    return sessions
  }
)
/* 
export const getPunchArray = (state, day) => {
  const sessions = getSessionsOnDay(state, day);
  let dailySequence = new Array(288);
  console.log(sessions)
}

 */