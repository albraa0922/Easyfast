import React, { useState, useEffect}  from 'react'
import "./NavBar.css"
import Admin from './Admin'
import Message from './icons/Message'
import Notification from './icons/Notification'

function NavBar() {
  const [isopen, setIsopen] = useState(false)
  const [openMsg ,setOpenMsg] = useState(false)

  const toggleDropdown = (dropdownType) =>{
    if (dropdownType === "notification"){
      setIsopen(!isopen)
      setOpenMsg(false)
    }else  if (dropdownType === "message"){
      setIsopen(false)
      setOpenMsg(!openMsg)
    }
  }

  useEffect(() =>{
    const handleClickAnywhere = (e) =>{
      if(!e.target.closest(".navNot") && !e.target.closest("nav-admin")){
        setIsopen(false)
        setOpenMsg(false)
      }
    }
  document.addEventListener("click",handleClickAnywhere)
  return () => {
    document.removeEventListener('click', handleClickAnywhere);
  };
  },[])

  
  return (
    <div className='navbar'>
      <div className='nav-admin'>
        <Admin/>
      </div>
      <div onClick={(e) => { e.stopPropagation(); toggleDropdown("notification")}} className='navNot'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 20.25C15 21.0456 14.6839 21.8087 14.1213 22.3713C13.5587 22.9339 12.7956 23.25 12 23.25C11.2044 23.25 10.4413 22.9339 9.87869 22.3713C9.31608 21.8087 9 21.0456 9 20.25" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.57998 19.25C5.09053 19.1461 4.6578 18.8626 4.36716 18.4553C4.07651 18.048 3.94908 17.5466 4.01001 17.05L5.01001 8.93998C5.26532 7.27263 6.11411 5.75352 7.40024 4.66215C8.68637 3.57077 10.3233 2.98054 12.01 2.99998V2.99998C13.6967 2.98054 15.3336 3.57077 16.6197 4.66215C17.9059 5.75352 18.7547 7.27263 19.01 8.93998L20.01 17.05C20.0713 17.5452 19.9452 18.0454 19.6566 18.4525C19.368 18.8595 18.9376 19.144 18.45 19.25C14.2177 20.2445 9.81234 20.2445 5.57998 19.25V19.25Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="18" cy="5" r="3.75" fill="#118AB2" stroke="white" stroke-width="1.5"/>
        </svg>
        {isopen && <Notification/>}
      </div>
      <div onClick={(e) => { e.stopPropagation(); toggleDropdown("notification")}} className='navNot'>
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00643 19L10.2983 21.29C10.5225 21.5156 10.7891 21.6946 11.0829 21.8168C11.3766 21.9389 11.6916 22.0018 12.0097 22.0018C12.3279 22.0018 12.6429 21.9389 12.9366 21.8168C13.2303 21.6946 13.497 21.5156 13.7211 21.29L16.0131 19H18.0147C19.0765 19 20.0947 18.5786 20.8455 17.8285C21.5962 17.0783 22.018 16.0609 22.018 15V8C22.018 6.93913 21.5962 5.92178 20.8455 5.17163C20.0947 4.42149 19.0765 4 18.0147 4H6.00478C4.94303 4 3.92477 4.42149 3.174 5.17163C2.42324 5.92178 2.00146 6.93913 2.00146 8V15C2.00146 16.0609 2.42324 17.0783 3.174 17.8285C3.92477 18.5786 4.94303 19 6.00478 19H8.00643Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.0176 8.75C23.0895 8.75 24.7701 7.07165 24.7701 5C24.7701 2.92835 23.0895 1.25 21.0176 1.25C18.9458 1.25 17.2651 2.92835 17.2651 5C17.2651 7.07165 18.9458 8.75 21.0176 8.75Z" fill="#118AB2" stroke="#FCFDFD" stroke-width="1.5"/>
        </svg>

        {openMsg &&<Message/>}
      </div>
    </div>
  )
}

export default NavBar
