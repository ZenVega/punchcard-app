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

export const projectSearch = (state = '', action) => {
switch(action.type){
  case 'UPDATE_PROJECT_SEARCH':
      return action.payload
    default:
      return state
    }
}


const sessionsInitialState = {
  'asdsafshf543rzutruerwqerqwr':
  {
    project: 'asdsafshf5436357ghe',
    start: '2020-09-07T08:42:50.624Z',
    end: '2020-09-07T08:44:05.014Z'
    
  },
  'sdgsgsgdsaas436357ghe':
  {
    project: 'asdsafshf5436357ghe',
    start: '2020-09-07T08:48:50.624Z',
    end: '2020-09-07T08:55:05.014Z'
    
  },
  'asfgasgsag436hsdesdfsfsd':
  {
    project: '43635sdf7ghsdesdfsfsd',
    start: '2020-09-07T09:10:50.624Z',
    end: '2020-09-07T09:20:05.014Z'
  },
  'rtdjrtjdjzasfgasgsag436hsdesdfsfsd':
  {
    project: "43635sdf7ghsdesdfsfsd",
    start: "2020-09-07T11:24:02.315Z",
    end: "2020-09-07T11:24:07.397Z"
  },
  sessionIDs:['asdsafshf543rzutruerwqerqwr', 'sdgsgsgdsaas436357ghe', 'asfgasgsag436hsdesdfsfsd','rtdjrtjdjzasfgasgsag436hsdesdfsfsd']
}

export const sessions = (state = sessionsInitialState, action) => {
  switch(action.type){
    case 'ADD_NEW_SESSION':
      return {
        ...state, 
          [action.id] : action.payload,
          sessionIDs: state.sessionIDs.concat(action.id)
      }
    case 'UPDATE_SESSION':
      return {
        ...state, 
          [action.id] : {
            ...state[action.id],
            end: action.payload
          }
      }
    case 'REMOVE_SESSION':
      let sessionsUpdate = {...state.sessions}
      delete sessionsUpdate[action.id]
      sessionsUpdate.sessionIDs = state.sessions.sessionIDs.filter(id => id !== action.id)
      return {
        ...state,
        sessions: sessionsUpdate
      }
      default:
        return state
  }
}

