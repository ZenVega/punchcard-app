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