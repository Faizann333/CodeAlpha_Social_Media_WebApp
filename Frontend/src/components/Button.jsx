import React from 'react'

const Button = ({ name, className, onClick }) => {
  return (
    <div>
       <button className={` px-3 py-2 border cursor-pointer rounded-lg ${className}`} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button;