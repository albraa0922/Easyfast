import React, { useState, useEffect } from 'react'
import "./Admin.css"
import adminPoto from '../Imges/Rectangle 1074.png'
import { Link } from 'react-router-dom'

function Admin() {

  const [openAdmin, setOpenAdmin] = useState(false)
  const handleAdmin = () =>{
    setOpenAdmin(!openAdmin)
  }
  useEffect(() => {
    const handleClickAnywhere = (e) => {
      if (!e.target.closest('.admin')) {
        setOpenAdmin(false);
      }
    };
    document.addEventListener("click", handleClickAnywhere);
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, []);
  
  return (
    <div className='admin'onClick={(e) => { e.stopPropagation(); handleAdmin()}}>
      <div className='icon' >
          <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.5L10 6.65991C9.74294 6.9323 9.4329 7.14929 9.08899 7.29761C8.74508 7.44593 8.37453 7.52246 8 7.52246C7.62547 7.52246 7.25486 7.44593 6.91095 7.29761C6.56704 7.14929 6.25706 6.9323 6 6.65991L1 1.5" stroke="#073B4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>
      <div className='info'>
        <h4>وجيه عوض</h4>
        <p>أدمن</p>
      </div>
      <img src={adminPoto} alt='admin poto'></img>
      <div className={`admn ${openAdmin ? 'open' : ''}`}>
        <Link><span>الملف الشخصي</span></Link>
        <Link to="/ChangePassword"><span>تغيير كلمة المرور</span></Link>
      </div>
    </div>
  )
}

export default Admin
