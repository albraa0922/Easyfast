import React, { useState } from 'react'
import "./Message.css"
import {userMessages} from"../Object"
import Msg from './Msg'
import { Link } from 'react-router-dom'

function Message({openMsg}) {
  
  const [messages ,setMessages] = useState(userMessages)
  const msgCount = messages.length
  return (
    <div className='message' style={{display:(openMsg ? "" :"none")}}>
      <div className='mCont'>
        <p className='notsCount'> لديك {msgCount} رسائل</p>
        {messages?.map((message, index) => ( 
          <Msg
          key      = {index}
          name ={message.name}
          logo ={message.logo} 
          msg ={message.msg}
          sentAt = {message.sentAt}
          >
          </Msg>
        ))}
      </div>
      <Link>عرض الكل</Link>
    </div>
  )
}

export default Message
