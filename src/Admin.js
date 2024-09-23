import React from 'react'
import "./Admin.css"
import adminPoto from './Imges/Rectangle 1074.png'
import Vector from './icons/Vector'

function Admin() {
  return (
    <div className='admin'>
      <div className='icon'>
        <Vector/> 
      </div>
      <div className='info'>
        <h4>وجيه عوض</h4>
        <p>أدمن</p>
      </div>
      <img src={adminPoto} alt='admin poto'></img>
    </div>
  )
}

export default Admin
