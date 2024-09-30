import React from 'react'
import NavBar from './NavBar'
import SideMenu from './SideMenu'
import HomeContent from './HomeContent'
import Login from './Login'

function Home() {
  return (
    <div className='Home'>
      <NavBar></NavBar>
      <SideMenu></SideMenu>
      <HomeContent></HomeContent>
    </div>
  )
}

export default Home
