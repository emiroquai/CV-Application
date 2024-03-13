/* eslint-disable react/prop-types */
import '../styles/Input.css'

export default function Input({ property, label, type, index, state, setState} ) {

  return (
    <div className="inputWrapper">
      <label className="label">
        {label}
      </label>
      <input
        id={property} 
        type={type} 
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