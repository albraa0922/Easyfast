import React from 'react'
import  "./Not.css"
import * as timeago from 'timeago.js';

function Not({ pho, text, sentAt }) {
  return (
    <div className='not'>
      <img src={pho} className='notLogo'></img>
      <p className='notP'>{text}</p>
      <p className='notTime'>{timeago.format(sentAt)}</p>
    </div>
  )
}

export default Not
