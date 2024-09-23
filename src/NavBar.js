import React from 'react'
import "./NavBar.css"
import Admin from './Admin'
import Message from './icons/Message'
import Notification from './icons/Notification'


function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-admin'>
        <Admin/>
      </div>
      <div className='not'>
          <Notification/>
        </div>
        <div className='not'>
          <Message/>
        </div>
    </div>
  )
}

export default NavBar
