import React, { useState } from 'react'
import "./Login.css"
import Buttuon from './Button'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [logData, setLogData] = useState({
        email : "",
        password : "",
        error : "",
    })
    const navigate = useNavigate()

    const handleLoginChange = (e) =>{
        const {name, value} = e.target
        setLogData({...logData, [name]:value})
    }
    const onSubmit = (e) =>{
        e.preventDefault()
    if (logData.email === '' || logData.password === '') {
        setLogData({ ...logData, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' });
    }else{
        navigate("/Home")
    }
    }

    
  return ( 
    <div className='login'>
      <form onSubmit={onSubmit}>
        <div className='lgLogo'>
            <svg width="188" height="30" viewBox="0 0 188 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.6787 2.14622V27.8538C48.6787 28.423 48.4496 28.9689 48.0418 29.3714C47.634 29.7739 47.0809 30 46.5042 30H36.521V24.0017H42.6013V6.00111H36.521V0H46.5042C47.0809 0 47.634 0.226119 48.0418 0.628613C48.4496 1.03111 48.6787 1.57701 48.6787 2.14622V2.14622Z" fill="#118AB2"/>
            <path d="M18.2378 2.14622V27.8538C18.2378 28.423 18.4669 28.9689 18.8747 29.3714C19.2825 29.7739 19.8356 30 20.4123 30H30.3955V24.0017H24.3181V6.00111H30.3955V0H20.4123C19.8356 0 19.2825 0.226119 18.8747 0.628613C18.4669 1.03111 18.2378 1.57701 18.2378 2.14622V2.14622Z" fill="#118AB2"/>
            <path d="M0 8.14732V21.8554C0 22.4246 0.229102 22.9705 0.636905 23.373C1.04471 23.7755 1.59781 24.0017 2.17453 24.0017H12.1577V18.0005H6.08026V11.9994H12.1577V6.0011H2.17453C1.59781 6.0011 1.04471 6.22722 0.636905 6.62971C0.229102 7.03221 0 7.57811 0 8.14732H0Z" fill="#118AB2"/>
            <path d="M66.8466 8.14732V21.8554C66.8466 22.1375 66.7902 22.4168 66.6808 22.6774C66.5713 22.938 66.4109 23.1747 66.2087 23.374C66.0064 23.5734 65.7664 23.7314 65.5022 23.8391C65.2381 23.9468 64.955 24.002 64.6692 24.0017H54.686V18.0005H60.7663V11.9994H54.686V6.0011H64.6692C64.955 6.00074 65.2381 6.05598 65.5022 6.16368C65.7664 6.27137 66.0064 6.4294 66.2087 6.62873C66.4109 6.82806 66.5713 7.06479 66.6808 7.32536C66.7902 7.58593 66.8466 7.86524 66.8466 8.14732V8.14732Z" fill="#118AB2"/>
            <path d="M81.6867 6.73499H91.0554V10.4376H84.1222V13.4506H90.1239V17.1282H84.1222V20.2437H91.0554V23.974H81.6867C81.145 23.974 80.6254 23.7616 80.2423 23.3835C79.8593 23.0054 79.644 22.4926 79.644 21.9579V8.75105C79.644 8.21635 79.8593 7.70356 80.2423 7.32548C80.6254 6.94739 81.145 6.73499 81.6867 6.73499Z" fill="#118AB2"/>
            <path d="M107.113 24.0017H102.61V19.7092H98.6505V24.0017H94.1611V8.77042C94.1611 8.23547 94.3762 7.72239 94.7592 7.34387C95.1422 6.96534 95.6618 6.75232 96.2038 6.75159H105.081C105.623 6.75232 106.143 6.96534 106.526 7.34387C106.909 7.72239 107.124 8.23547 107.124 8.77042L107.113 24.0017ZM102.61 15.9706V10.8003C102.604 10.726 102.584 10.6534 102.55 10.5871C102.515 10.5207 102.468 10.4618 102.41 10.414C102.352 10.3661 102.285 10.3303 102.213 10.3087C102.14 10.287 102.065 10.28 101.989 10.288H99.1836C99.1145 10.2869 99.0458 10.2993 98.9815 10.3245C98.9172 10.3497 98.8587 10.3872 98.8091 10.4348C98.7596 10.4824 98.7201 10.5392 98.6928 10.6019C98.6656 10.6647 98.6512 10.7321 98.6505 10.8003V15.9817L102.61 15.9706Z" fill="#118AB2"/>
            <path d="M110.208 20.2437H116.754C116.934 20.2437 117.035 20.144 117.035 20.0139V17.5215C117.035 17.3913 116.931 17.2916 116.754 17.2916H112.251C111.709 17.2909 111.189 17.0779 110.806 16.6993C110.423 16.3208 110.208 15.8077 110.208 15.2728V8.75105C110.208 8.21635 110.423 7.70356 110.806 7.32548C111.189 6.94739 111.709 6.73499 112.251 6.73499H121.283V10.4376H114.967C114.933 10.4376 114.899 10.4442 114.868 10.457C114.837 10.4698 114.808 10.4885 114.784 10.5122C114.76 10.5358 114.741 10.5639 114.728 10.5948C114.715 10.6258 114.709 10.6589 114.709 10.6923V13.2456C114.714 13.3091 114.744 13.368 114.792 13.4106C114.84 13.4533 114.902 13.4764 114.967 13.4755H119.47C119.74 13.4755 120.007 13.5282 120.256 13.6305C120.505 13.7328 120.731 13.8828 120.921 14.0717C121.112 14.2606 121.262 14.4848 121.364 14.7314C121.466 14.9779 121.517 15.2419 121.516 15.5082V21.9551C121.516 22.2203 121.463 22.4828 121.36 22.7277C121.257 22.9727 121.106 23.1952 120.916 23.3827C120.727 23.5701 120.501 23.7188 120.253 23.8203C120.005 23.9218 119.739 23.974 119.47 23.974H110.211L110.208 20.2437Z" fill="#118AB2"/>
            <path d="M128.901 23.974V18.9172H126.572C126.039 18.8977 125.534 18.6728 125.167 18.2908C124.8 17.9088 124.599 17.4 124.608 16.8735V6.73499H129.097V14.6525C129.097 14.7259 129.127 14.7963 129.179 14.8483C129.232 14.9002 129.303 14.9294 129.378 14.9294H132.997C133.151 14.9294 133.177 14.802 133.177 14.6746V6.73499H137.68V16.8735C137.689 17.4 137.488 17.9088 137.121 18.2908C136.753 18.6728 136.249 18.8977 135.716 18.9172H133.412V23.974H128.901Z" fill="#118AB2"/>
            <path d="M145.581 6.73499H150.07V20.2437H155.634V23.974H147.624C147.082 23.974 146.562 23.7616 146.179 23.3835C145.796 23.0054 145.581 22.4926 145.581 21.9579V6.73499Z" fill="#118AB2"/>
            <path d="M171.687 23.974H167.197V19.6815H163.227V23.974H158.738V8.74274C158.74 8.21045 158.955 7.70062 159.337 7.32449C159.719 6.94835 160.236 6.73644 160.775 6.73499H169.65C170.191 6.73499 170.711 6.94739 171.094 7.32548C171.477 7.70356 171.692 8.21635 171.692 8.75105L171.687 23.974ZM167.197 15.943V10.7699C167.194 10.6933 167.174 10.6182 167.14 10.5495C167.105 10.4808 167.056 10.4199 166.997 10.3707C166.937 10.3215 166.868 10.285 166.793 10.2637C166.719 10.2423 166.64 10.2364 166.563 10.2465H163.757C163.688 10.2443 163.618 10.2558 163.553 10.2805C163.488 10.3052 163.428 10.3425 163.378 10.3902C163.327 10.4379 163.287 10.4951 163.259 10.5584C163.231 10.6217 163.217 10.6898 163.216 10.7588V15.954L167.197 15.943Z" fill="#118AB2"/>
            <path d="M174.776 21.9579V8.75105C174.776 8.21635 174.991 7.70356 175.374 7.32548C175.757 6.94739 176.277 6.73499 176.819 6.73499H185.542C186.964 6.73499 187.871 7.62671 187.871 8.90613V12.7389C187.871 13.9131 187.094 15.0374 185.489 15.4196C187.094 15.8045 188 16.8762 188 18.0255V21.7779C188 23.1321 187.094 23.974 185.671 23.974H176.819C176.277 23.974 175.757 23.7616 175.374 23.3835C174.991 23.0054 174.776 22.4926 174.776 21.9579V21.9579ZM183.55 10.4376C183.55 10.3678 183.524 10.3005 183.476 10.2492C183.428 10.1978 183.362 10.1662 183.292 10.1606H179.254V13.733H183.292C183.328 13.7341 183.364 13.7274 183.397 13.7135C183.43 13.6997 183.46 13.6789 183.485 13.6527C183.509 13.6264 183.528 13.5953 183.539 13.5614C183.55 13.5275 183.554 13.4916 183.55 13.4561V10.4376ZM183.55 17.1808C183.55 17.1111 183.524 17.0438 183.476 16.9925C183.428 16.9411 183.362 16.9095 183.292 16.9039H179.254V20.7034H183.292C183.326 20.7054 183.361 20.7002 183.393 20.6881C183.425 20.676 183.454 20.6573 183.479 20.6333C183.503 20.6092 183.522 20.5803 183.534 20.5485C183.547 20.5166 183.552 20.4826 183.55 20.4486V17.1808Z" fill="#118AB2"/>
            </svg>
        </div>
        <label>عنوان المدخل </label>
        <input
          type='email'
          name='email'
          value={logData.email}
          onChange={handleLoginChange}/>
          <label>كلمة المرور </label>
        <input
            type='password'
            name='password'
            value={logData.password}
            onChange={handleLoginChange}/>
            {logData.error && <p className="errorMessage">{logData.error}</p>}
          <Buttuon className="logbut">  تسجيل الدخول </Buttuon>
      </form>
    </div>
  )
}

export default Login
