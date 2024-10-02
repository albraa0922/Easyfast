import React from 'react'
import "./Additions.css"
import im from"../Imges/Rectangle 7833.png"


function Additions(props) {

  return (
    <div className='additions'>
        <div className={props.index%2===0?"even":"odd"}>
          <p>{props.userName}
            <img src={im}></img>
          </p>
          <p>{props.email}</p>
          <p>{props.code}</p>
          <p>{props.userCategory}</p>
          <p>{props.userRate}</p>
          <p>
              <button onClick={() => props.removeItem(props.index)}>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.163574" y="0.5" width="40.1636" height="40" rx="8" fill="#FDB5AA"/>
                <path d="M12.6841 16.3249C17.5691 14.5663 22.9218 14.5663 27.8068 16.3249" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8931 15.2667C16.8931 14.3826 17.2471 13.5348 17.8774 12.9097C18.5076 12.2846 19.3624 11.9333 20.2537 11.9333C21.145 11.9333 21.9997 12.2846 22.63 12.9097C23.2602 13.5348 23.6143 14.3826 23.6143 15.2667" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.2456 21.3334V25.5" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.1264 18.825L25.5635 25.4916C25.4732 26.3925 25.0531 27.2292 24.3827 27.8435C23.7123 28.4578 22.8381 28.807 21.9256 28.825H18.565C17.6525 28.807 16.7783 28.4578 16.1079 27.8435C15.4375 27.2292 15.0174 26.3925 14.9272 25.4916L14.3643 18.825" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
          </p>
        </div>
    </div>
  )
}

export default Additions
