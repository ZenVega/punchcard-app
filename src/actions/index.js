//SETTINGS ACTIONS

export const showProjectAdder = bool => {
  return{
    type: 'SHOW_PROJECT_ADDER',
    payload: bool
  }
}

export const showProjectList = bool => {
  return{
    type: 'SHOW_PROJECT_LIST',
    payload: bool
  }
}

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

export const toggleNoProjectEntered = obj => {
  return{
    type: 'TOGGLE_NO_PROJECT_ENTERED',
    payload: obj
  }
}

export const addNewProject = (id,obj) => {
  return{
    type: 'ADD_NEW_PROJECT',
    id: id,
    payload: obj
  }
}

export const changeCurrentProject = (id) => {
  return{
    type: 'CHANGE_CURRENT_PROJECT',
    id
  }
}


export const updateProjectSearch = str => {
  return{
    type: 'UPDATE_PROJECT_SEARCH',
    payload: str
  }
}


export const addNewSession = (id, obj) => {
  return{
    type: 'ADD_NEW_SESSION',
    id: id,
    payload: obj
  }
}

export const updateSession = (id, obj) => {
  return{
    type: 'UPDATE_SESSION',
    id: id,
    payload: obj
  }
}

export const removeSession = (id) => {
  return{
    type: 'REMOVE_SESSION',
    id: id
  }
}

export const addDailyCard = (id, obj) => {
  return{
    type: 'ADD_DAILY_CARD',
    id,
    payload: obj
  }
}

