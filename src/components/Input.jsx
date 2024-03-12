/* eslint-disable react/prop-types */
import '../styles/Input.css'

export default function Input({property, label, type, state, setState}) {
  return (
    <div className="inputWrapper">
      <label className="label">
        {label}
      </label>
      <input 
        type={type} 
        value={state[property]}
        onChange={(e) => {
          const newValue = {...state, [property]: e.target.value}
          setState(newValue)
        }}
      />
    </div>
  
  )
}