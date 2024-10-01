import React, { useState , useEffect} from 'react'
import "./Notification.css"
import Not from './Not'
import {userNot} from "../Object"

function Notification() {
  const[nots , setNots] = useState(userNot)

  useEffect(() => {
    setInterval(() => {
      setNots(userNot.map((not) => ({
        ...not,
        sentAt: new Date(not.sentAt).toISOString()
      })));
      
    }, 1000);
  }, []);
   
  const notsCount = nots.length
  return (
   <div className='Notification' >
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
