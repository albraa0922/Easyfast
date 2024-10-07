import React, { useState } from 'react'
import "./Notification.css"
import Not from '../NavBar/Not'
import {userNot} from "../Object"

function Notification({isopen}) {
  const[nots , setNots] = useState(userNot)
  const notsCount = nots.length
  
  return (
   <div  className={`Notification ${isopen ? 'open' : ''}`}>
    <p className='notsCount'> لديك {notsCount} إشعارات</p>
    {nots?.map((not) => (
      <Not 
      pho = {not.logo}
      text = {not.text}
      sentAt={not.sentAt}
      ></Not>
    ))}
   </div>
  )
}

export default Notification
