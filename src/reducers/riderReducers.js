export const showSessions = (state = false, action) => {
  switch(action.type){
    case 'SHOW_SESSIONS':
        return state = action.payload;
      default:
        return state
     }
  }

export const showTimer = (state = true, action) => {
  switch(action.type){
    case 'SHOW_TIMER':
        return state = action.payload;
      default:
        return state
     }
  }

export const showToday = (state = false, action) => {
  switch(action.type){
    case 'SHOW_TODAY':
        return state = action.payload;
      default:
        return state
     }
  }

const riderBtnInitialState = {
  sessions: 'rider-btn',
  timer: 'rider-btn active',
  today: 'rider-btn'
}

export const setRiderBtn = (state = riderBtnInitialState, action) => {
  switch(action.type){
    case 'SET_RIDER_BTN':
        return state = action.payload;
      default:
        return state
     }
  }
