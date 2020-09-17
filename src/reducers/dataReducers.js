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
  'sshasdadaf5436357ghe':
  {
    name: 'a fun App'
  },
  'dsaasfdshfdfg5df436357ghe':
  {
    name: 'household'
  },
  '43635sdf7ghsdesdfsfsd':
  {
    name: 'Aeroplane'
  },
  projectIDs:['asdsafshf5436357ghe', 'dsaasfdshfdfg5df436357ghe', '43635sdf7ghsdesdfsfsd', 'sshasdadaf5436357ghe']
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
  '1600334008461':
  {
    project: "asdsafshf5436357ghe",
    start: 1600334008461,
    date: "2020-09-17",
    end: 1600334011206,
    duration: 2745
  },
  '1600334209606':
  {
    project: "asdsafshf5436357ghe",
    start: 1600334209606,
    date: "2020-09-17",
    end: 1600334215014,
    duration: 5408
  },
  '1600335210849':
  {
    project: "dsaasfdshfdfg5df436357ghe",
    start: 1600335210849,
    date: "2020-09-17",
    end: 1600335216485,
    duration: 5636
  },
  '1600335626162':
  {
    project: "43635sdf7ghsdesdfsfsd",
    start: 1600335626162,
    date: "2020-09-17",
    end: 1600335635792,
    duration: 9630
  },
  '1600337504577':
  {
    project: "dsaasfdshfdfg5df436357ghe",
    start: 1600337504577,
    date: "2020-09-17",
    end: 1600337511945,
    duration: 7368
  },
  '1600338516253':
  {
    project: "sshasdadaf5436357ghe",
    start: 1600338516253,
    date: "2020-09-17",
    end: 1600338524341,
    duration: 8088
  },
  sessionIDs:['1600334008461', '1600334209606', '1600335210849','1600335626162','1600337504577','1600338516253']
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
            end: action.payload.end,
            duration: action.payload.duration
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

