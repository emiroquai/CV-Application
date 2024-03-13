/* eslint-disable react/prop-types */
import '../styles/DeleteButton.css'
import Icon from '@mdi/react';
import { mdiTrashCan } from '@mdi/js';

export default function DeleteButton({ index, state, setState }) {
  const handleDelete = (index) => {
    const newState = [...state]
    newState.splice(index,1)
    setState(newState)
  }

  return(
    <>
      <button 
        className="deleteBtn"
        onClick={() => {handleDelete(index)}}
      >
        <Icon path={mdiTrashCan} size={1} />
      </button>
    </>
  )
}