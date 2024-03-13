/* eslint-disable react/prop-types */
export default function AddButton({ handleClick }) {
  return (
    <>
      <button 
      className="addBtn"
      onClick={handleClick}
      >
        Add new
      </button>
    </>
  )
}