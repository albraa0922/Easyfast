import React from 'react'
import SideMenu from '../SideMenu'
import NavBar from '../NavBar/NavBar'
import Nothing from '../Nothing'

function AppData() {
  return (
    <div className='appData'>
      <NavBar/>
      <SideMenu/>
      <Nothing/>
    </div>
  )
}

export default AppData
