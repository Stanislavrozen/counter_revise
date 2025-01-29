import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button {...props} className="button-4" role="button">{props.children}</button>
  )
}

export default Button