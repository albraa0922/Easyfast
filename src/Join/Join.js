import React, { useState } from 'react'
import "./Join.css"
import SideMenu from '../SideMenu'
import { loginData } from '../Object'
import JoinCard from './JoinCard'
import NavBar from '../NavBar/NavBar'

function Join() {
    const [loginCards, setLoginCards] = useState(loginData)
    console.log(loginCards.price)
  return (
    <div>
      <NavBar></NavBar>
      <SideMenu/>
      <div className='join'>
        {loginCards?.map((loginCard, index) =>(
            <JoinCard
            index = {index}
            name = {loginCard.name}
            price = {loginCard.price ||0}
            time = {loginCard.time}
            info = {loginCard.info}
            p = {loginCard.p}
           >
            </JoinCard>
        ))}
      </div>
    </div>
    
  )
}

export default Join
