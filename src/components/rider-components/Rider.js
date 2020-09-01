import React from 'react';
import { useSelector } from 'react-redux';

import './Rider.css'
import Chapter from './Chapter'

const Rider = () => {
  const setRiderBtn = useSelector(state => state.rider.setRiderBtn);
  return(
    <div className="Rider">
     <Chapter className={setRiderBtn.sessions} id="1" name="Sessions" />
     <Chapter className={setRiderBtn.timer} id="2" name="Timer" />
     <Chapter className={setRiderBtn.today} id="3" name="Today's Session" />
    </div>
  )
}

export default Rider;