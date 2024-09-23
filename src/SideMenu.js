import React from 'react'
import"./SideMenu.css"
import {Link, useLocation} from "react-router-dom";


import Logo from './icons/Logo'

function SideMenu() {
  const location = useLocation();
  return (
    <div className='sidemenu'>
      <div className='menu-logo'>
        <Logo/>
      </div>
      <div className='menu-link'>
        
        <ul>
          <li className={ location.pathname==="/"? "active" : ""}>
            <svg className='left' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to="/">الرئسية</Link>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11.3334V16.3334" stroke="#0F7CA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.5 9.24162C2.5 6.64162 7.39167 2.16663 10 2.16663C12.6083 2.16663 17.5 6.64162 17.5 9.24162V15.5583C17.4847 16.4322 17.1268 17.2651 16.5033 17.8777C15.8798 18.4902 15.0407 18.8334 14.1667 18.8333H5.83333C4.95929 18.8334 4.12016 18.4902 3.49669 17.8777C2.87322 17.2651 2.5153 16.4322 2.5 15.5583V9.22494" stroke="#0F7CA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li className={ location.pathname==="/Members"? "active" : ""}>
            <svg className='left' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to="/Members">الاعضاء</Link>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6668 18V16.3333C16.6668 15.4493 16.3156 14.6014 15.6905 13.9763C15.0654 13.3512 14.2176 13 13.3335 13H6.66683C5.78277 13 4.93493 13.3512 4.30981 13.9763C3.68469 14.6014 3.3335 15.4493 3.3335 16.3333V18" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.99984 9.66667C11.8408 9.66667 13.3332 8.17428 13.3332 6.33333C13.3332 4.49238 11.8408 3 9.99984 3C8.15889 3 6.6665 4.49238 6.6665 6.33333C6.6665 8.17428 8.15889 9.66667 9.99984 9.66667Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li className={ location.pathname==="/Appdata"? "active" : ""}>
            <svg className='left'width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to="/Appdata">بيانات التطبيق</Link>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1044_2685)">
              <path d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6023 18.3332 9.99996C18.3332 5.39759 14.6022 1.66663 9.99984 1.66663C5.39746 1.66663 1.6665 5.39759 1.6665 9.99996C1.6665 14.6023 5.39746 18.3333 9.99984 18.3333Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 6.66663V9.99996" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 13.3334H10.0083" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1044_2685">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </li> 
          <li className={ location.pathname==="/Condition"? "active" : ""}>
            <svg className='left'width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to="/Condition">الشروط والاحكام</Link>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6668 1.66663H5.00016C4.55814 1.66663 4.13421 1.84222 3.82165 2.15478C3.50909 2.46734 3.3335 2.89127 3.3335 3.33329V16.6666C3.3335 17.1087 3.50909 17.5326 3.82165 17.8451C4.13421 18.1577 4.55814 18.3333 5.00016 18.3333H15.0002C15.4422 18.3333 15.8661 18.1577 16.1787 17.8451C16.4912 17.5326 16.6668 17.1087 16.6668 16.6666V6.66663L11.6668 1.66663Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.6665 1.66663V6.66663H16.6665" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3332 10.8334H6.6665" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3332 14.1666H6.6665" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.33317 7.5H7.49984H6.6665" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li> 
          <li className={ location.pathname==="/OrderBar"? "active" : ""}>
             <svg className='left'width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to="/OrderBar">ضبط شريط الطلب</Link>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99984 13.8333C11.8408 13.8333 13.3332 12.3409 13.3332 10.5C13.3332 8.65901 11.8408 7.16663 9.99984 7.16663C8.15889 7.16663 6.6665 8.65901 6.6665 10.5C6.6665 12.3409 8.15889 13.8333 9.99984 13.8333Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0.875 10.5H5.83333" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.1748 10.5H19.1331" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li> 
          <li className={ location.pathname==="/Settings"? "active" : ""}>
             <svg className='left'width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Link to="/Settings">الاعدادات</Link>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6668 18V16.3333C16.6668 15.4493 16.3156 14.6014 15.6905 13.9763C15.0654 13.3512 14.2176 13 13.3335 13H6.66683C5.78277 13 4.93493 13.3512 4.30981 13.9763C3.68469 14.6014 3.3335 15.4493 3.3335 16.3333V18" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.99984 9.66667C11.8408 9.66667 13.3332 8.17428 13.3332 6.33333C13.3332 4.49238 11.8408 3 9.99984 3C8.15889 3 6.6665 4.49238 6.6665 6.33333C6.6665 8.17428 8.15889 9.66667 9.99984 9.66667Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
