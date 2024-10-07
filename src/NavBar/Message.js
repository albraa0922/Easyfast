import React, { useState } from 'react'
import "./Message.css"
import {userMessages} from"../Object"
import Msg from './Msg'

function Message({openMsg}) {
  const [messages ,setMessages] = useState(userMessages)
  const msgCount = messages.length
  return (
    
    <div className={`message ${openMsg ? 'open' : ''}`}>
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
    </div>
  )
}

export default Message
