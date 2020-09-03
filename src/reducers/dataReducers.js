export const currentProject = (state = '', action) => {
  switch(action.type){
    case 'CHANGE_CURRENT_PROJECT':
        return action.id
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
  },
  projectIDs:['asdsafshf5436357ghe', 'dsaasfdshfdfg5df436357ghe', '43635sdf7ghsdesdfsfsd']
}

export const projects = (state = projectsInitialState, action) => {
switch(action.type){
  case 'ADD_NEW_PROJECT':
      return {
        ...state, 
          [action.id] : action.payload,
          projectIDs: state.projectIDs.concat(action.id)
      }
    default:
      return state
    }
}