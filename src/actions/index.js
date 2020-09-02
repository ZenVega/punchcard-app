//RIDER ACTIONS

export const showSessions = (bool) => {
  return{
    type: 'SHOW_SESSIONS',
    payload: bool
  }
}

export const showTimer = (bool) => {
  return{
    type: 'SHOW_TIMER',
    payload: bool
  }
}

export const showToday = (bool) => {
  return{
    type: 'SHOW_TODAY',
    payload: bool
  }
}

export const setRiderBtn = obj => {
  return{
    type: 'SET_RIDER_BTN',
    payload: obj
  }
}

//TIMER ACTIONS

export const toggleStartBtn = bool => {
  return{
    type: 'TOGGLE_START_BTN',
    payload: bool
  }
}

export const updateRunningTime = obj => {
  return{
    type: 'UPDATE_RUNNING_TIME',
    payload: obj
  }
}

