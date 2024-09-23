import React from 'react'
import "./Button.css"

function Buttuon({children}) {
  return (
    <button className='but'>
      {children}
    </button>
  )
}

export default Buttuon
