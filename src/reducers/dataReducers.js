export const currentProject = (state = "Add a new project", action) => {
  switch(action.type){
    case 'CHANGE_CURRENT_PROJECT':
        return state
      default:
        return state
      }
  }

const projectsInitialState = {
  'asdsafshf5436357ghe':
  {
    name: 'nice Website'
  },
  'dsaasfdshfdfg5df436357ghe':
  {
    name: 'shitty App'
  },
  '43635sdf7ghsdesdfsfsd':
  {
    name: 'Aeroplane'
  }
}

export const projects = (state = projectsInitialState, action) => {
switch(action.type){
  case 'ADD_NEW_PROJECT':
      return {
        ...state, 
          [action.id] : action.payload
      }
    default:
      return state
    }
}