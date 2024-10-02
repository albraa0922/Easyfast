import React from 'react'
import  "./Msg.css"
import * as timeago from 'timeago.js';

function Msg({name, logo , msg, sentAt}) {
  return (
      <div className='msg'>
        <div className='msgTit'>
            <img src={logo}></img>
            <h3 className='msgname'>{name}</h3>
            <p className='msgTime'>{timeago.format(sentAt)}</p>
        </div>
        <p className='msgP'>{msg}</p>
      </div>
  )
}

export default Msg
