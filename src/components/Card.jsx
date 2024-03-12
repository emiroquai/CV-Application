/* eslint-disable react/prop-types */
import '../styles/Card.css'
import Icon from '@mdi/react';
import { mdiMenuUpOutline } from '@mdi/js';
import { mdiMenuDownOutline } from '@mdi/js';
import { useState } from 'react';

export default function Card({ title, children }) {
  const [showState, setShowState] = useState(true)
  const handleToggleShow = () => {
    setShowState(!showState)
  }

  return (
    <div className="card">
      <h3 className="cardTitle" onClick={handleToggleShow}>
        {showState
          ? <Icon path={mdiMenuDownOutline} size={1} /> 
          : <Icon path={mdiMenuUpOutline} size={1} />
        }
         {title}
      </h3>
      {showState && children}
    </div>
  )

  
}