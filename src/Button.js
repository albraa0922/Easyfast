import React from 'react'
import "./Button.css"

function Buttuon(props) {
  return (
    <button onClick={props.handleClick} className='but'>
      {props.children}
    </button>
  )
}

export default Buttuon
