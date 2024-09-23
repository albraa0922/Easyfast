import React from 'react'
import "./Additions.css"
import im from"./Imges/Rectangle 7833.png"


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
              <button>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.163574" y="0.5" width="40.1636" height="40" rx="8" fill="#FDB5AA"/>
                <path d="M12.6841 16.3249C17.5691 14.5663 22.9218 14.5663 27.8068 16.3249" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.8931 15.2667C16.8931 14.3826 17.2471 13.5348 17.8774 12.9097C18.5076 12.2846 19.3624 11.9333 20.2537 11.9333C21.145 11.9333 21.9997 12.2846 22.63 12.9097C23.2602 13.5348 23.6143 14.3826 23.6143 15.2667" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.2456 21.3334V25.5" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.1264 18.825L25.5635 25.4916C25.4732 26.3925 25.0531 27.2292 24.3827 27.8435C23.7123 28.4578 22.8381 28.807 21.9256 28.825H18.565C17.6525 28.807 16.7783 28.4578 16.1079 27.8435C15.4375 27.2292 15.0174 26.3925 14.9272 25.4916L14.3643 18.825" stroke="#F0F5F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button>
              <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="40.1636" height="40" rx="8" fill="#A6F7E2"/>
              <path d="M27.8782 15.8334L19.8631 23.7834C19.065 24.5751 16.6957 24.9417 16.1664 24.4167C15.6371 23.8917 15.9984 21.5417 16.7965 20.75L24.82 12.7917C25.0179 12.5776 25.2574 12.4055 25.5242 12.2857C25.791 12.166 26.0795 12.1011 26.3722 12.095C26.665 12.0888 26.956 12.1416 27.2276 12.2501C27.4993 12.3586 27.7459 12.5207 27.9527 12.7263C28.1595 12.932 28.3221 13.1771 28.4307 13.4468C28.5394 13.7165 28.5918 14.0053 28.5849 14.2956C28.5779 14.586 28.5117 14.872 28.3902 15.1363C28.2688 15.4006 28.0946 15.6377 27.8782 15.8334V15.8334Z" stroke="#5F4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.2415 13.8334H15.0408C14.1495 13.8334 13.2948 14.1846 12.6645 14.8097C12.0343 15.4348 11.6802 16.2827 11.6802 17.1667V25.5C11.6802 26.3841 12.0343 27.2319 12.6645 27.8571C13.2948 28.4822 14.1495 28.8334 15.0408 28.8334H24.2824C26.1392 28.8334 26.8029 27.3334 26.8029 25.5V21.3334" stroke="#5F4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </button>
          </p>
        </div>
    </div>
  )
}

export default Additions
