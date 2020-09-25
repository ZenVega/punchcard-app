import { createSelector } from 'reselect'
/* 
const projectIDselector = state => state.entities.projects.allIDs;
const projectSelector = state => state.entities.projects.byID;
const daysDisplayed = state => state.entities.daysDisplayed;
 */

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

//Is that necessary and correct to memoize properly? 
//This is supposed to be called multible times?
export const getSessionsOnDay = (state, day) => {
  const getWDays = getWorkdaysIncludingSessions;
  return getWDays(state)[day]
}

/* 

export const getPunchArray = (state, day) => {
  const sessions = getSessionsOnDay(state, day);
  let dailySequence = new Array(288);
  console.log(sessions)
}

 */