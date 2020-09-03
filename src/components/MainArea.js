import React  from 'react';
import { useSelector } from 'react-redux';

import Sessions from './sessions-components/Sessions.js'
import Today from './todaysession-components/Today.js'
import Timer from './timer-components/Timer.js'

const MainArea = () => {

  const {showSessions, showToday, showTimer} = useSelector(state => state.rider);

  return(
    <div className="main-area">
      {showSessions && <Sessions/>}  
      {showToday && <Today/>}  
      {showTimer && <Timer/>}  
    </div>
  )
}

export default MainArea;