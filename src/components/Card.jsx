/* eslint-disable react/prop-types */
import '../styles/Card.css'

export default function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  )

  
}