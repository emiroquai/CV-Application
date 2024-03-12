/* eslint-disable react/prop-types */
import '../styles/Input.css'

export default function Textarea({property, label, state, setState}) {
  return (
    <div className="inputWrapper">
      <label className="label">
        {label}
      </label>
      <textarea
        id={property} 
        value={state[property]}
        onChange={(e) => {
          const newValue = {...state, [property]: e.target.value}
          setState(newValue)
        }}
      />
    </div>
  
  )
}