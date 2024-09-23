import React from 'react'
import NavBar from './NavBar'
import SideMenu from './SideMenu'
import HomeContent from './HomeContent'

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <SideMenu></SideMenu>
      <HomeContent></HomeContent>
    </div>
  )
}

export default Home
