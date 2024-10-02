import React from 'react'
import "./JoinCard.css"
import {Link} from "react-router-dom";


function JoinCard(props) {
  return (
    <div className='JoinCard'  style={{
      backgroundColor: props.index === 1 ? '#0f7ca0' : '',
      color :"#fff"
    }}>
        <p className='pri' style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.price} $</p>
        <p className='time' style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.time}</p>
      <div>
        <h2 style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.name}</h2>
        <p className='info' style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.info}</p>
      </div>
        <p style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.p}<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10742 10.0001L9.48142 12.3731L14.2274 7.62708" stroke="#E7F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41797 10.0001C1.41797 16.9371 3.73097 19.2501 10.668 19.2501C17.605 19.2501 19.918 16.9371 19.918 10.0001C19.918 3.06312 17.605 0.750122 10.668 0.750122C3.73097 0.750122 1.41797 3.06312 1.41797 10.0001Z" stroke="#B5DBE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </p>
        <p style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.p}<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10742 10.0001L9.48142 12.3731L14.2274 7.62708" stroke="#E7F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41797 10.0001C1.41797 16.9371 3.73097 19.2501 10.668 19.2501C17.605 19.2501 19.918 16.9371 19.918 10.0001C19.918 3.06312 17.605 0.750122 10.668 0.750122C3.73097 0.750122 1.41797 3.06312 1.41797 10.0001Z" stroke="#B5DBE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </p>
        <p style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.p}<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10742 10.0001L9.48142 12.3731L14.2274 7.62708" stroke="#E7F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41797 10.0001C1.41797 16.9371 3.73097 19.2501 10.668 19.2501C17.605 19.2501 19.918 16.9371 19.918 10.0001C19.918 3.06312 17.605 0.750122 10.668 0.750122C3.73097 0.750122 1.41797 3.06312 1.41797 10.0001Z" stroke="#B5DBE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </p>
        <p style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.p}<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10742 10.0001L9.48142 12.3731L14.2274 7.62708" stroke="#E7F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41797 10.0001C1.41797 16.9371 3.73097 19.2501 10.668 19.2501C17.605 19.2501 19.918 16.9371 19.918 10.0001C19.918 3.06312 17.605 0.750122 10.668 0.750122C3.73097 0.750122 1.41797 3.06312 1.41797 10.0001Z" stroke="#B5DBE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </p>
        <p style={{
        color: props.index === 1 ? "#fff" : ""
        }}>{props.p}<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10742 10.0001L9.48142 12.3731L14.2274 7.62708" stroke="#E7F3F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41797 10.0001C1.41797 16.9371 3.73097 19.2501 10.668 19.2501C17.605 19.2501 19.918 16.9371 19.918 10.0001C19.918 3.06312 17.605 0.750122 10.668 0.750122C3.73097 0.750122 1.41797 3.06312 1.41797 10.0001Z" stroke="#B5DBE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </p>
        <Link to={"/"}>
        <button>اشترك الان</button>
        </Link>
    </div>
  )
}

export default JoinCard
