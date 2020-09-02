export const startBtnStateActive = (state = false, action) => {
  switch(action.type){
    case 'TOGGLE_START_BTN':
        return state = !state;
      default:
        return state
     }
  }

const timeRunningInitialState = {
  seconds:0,
  minutes:0,
  hours:0
}

  export const timeRunning = (state = timeRunningInitialState, action) => {
  switch(action.type){
    case 'UPDATE_RUNNING_TIME':
        return state = action.payload;
      default:
        return state
     }
  }


  const projectsInitialState = {
    seconds:0,
    minutes:0,
    hours:0
  }
  
    export const projects = (state = projectsInitialState, action) => {
    switch(action.type){
      case 'ADD_NEW PROJECT':
          return state = action.payload;
        default:
          return state
       }
    }