export const showProjectAdder = (state = false, action) => {
  switch(action.type){
    case 'SHOW_PROJECT_ADDER':
        return state = action.payload;
      default:
        return state
     }
  }

  export const showProjectList = (state = false, action) => {
  switch(action.type){
    case 'SHOW_PROJECT_LIST':
        return state = action.payload;
      default:
        return state
     }
  }