/* eslint-disable react/prop-types */
import '../styles/Input.css'

export default function Textarea({property, label, index, state, setState}) {
  return (
    <div className="inputWrapper">
      <label className="label">
        {label}
      </label>
      <textarea
        id={property} 
        value={state[index][property]}
        onChange={(e) => {
          const newValue = state.map((item, stateIndex) =>
            stateIndex === index
              ? { ...item, [property]: e.target.value }
              : item,
          );
          setState(newValue);
        }}
      />
    </div>
  
  )
}