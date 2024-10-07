import React, {useState, useEffect} from 'react'
import"./PhoneMenu.css"
import {Link, useLocation} from "react-router-dom";

function PhoneMenu({showMenu}) {
    const location = useLocation();
    
    
  
    return (
      <div className='PhoneMenu'>
        <div className='closeMenu' onClick={showMenu}>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_1543_29435)">
<g filter="url(#filter1_dd_1543_29435)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.82764 14.4414C3.82764 23.4408 6.82829 26.4414 15.8276 26.4414C24.827 26.4414 27.8276 23.4408 27.8276 14.4414C27.8276 5.44206 24.827 2.44141 15.8276 2.44141C6.82829 2.44141 3.82764 5.44206 3.82764 14.4414Z" fill="#FCFDFD"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9334 11.321L12.7168 17.5377L18.9334 11.321Z" fill="white"/>
<path d="M18.9334 11.321L12.7168 17.5377" stroke="#118AB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9414 17.5456L12.7144 11.3186L18.9414 17.5456Z" fill="white"/>
<path d="M18.9414 17.5456L12.7144 11.3186" stroke="#118AB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_1543_29435" x="0.827637" y="0.441406" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1543_29435"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_1543_29435" result="effect2_dropShadow_1543_29435"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1543_29435" result="shape"/>
</filter>
<filter id="filter1_dd_1543_29435" x="0.827637" y="0.441406" width="30" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.454902 0 0 0 0 0.603922 0 0 0 0 0.631373 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1543_29435"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.454902 0 0 0 0 0.603922 0 0 0 0 0.631373 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_1543_29435" result="effect2_dropShadow_1543_29435"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1543_29435" result="shape"/>
</filter>
</defs>
        </svg>
        </div>
        <div className='menu-logo'>
          <svg width="189" height="28" viewBox="0 0 189 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_1038_1200)">
            <rect x="3" y="2" width="22" height="22" rx="4" fill="white"/>
            <path d="M18.5833 4.75H9.41667C7.39162 4.75 5.75 6.39162 5.75 8.41667V17.5833C5.75 19.6084 7.39162 21.25 9.41667 21.25H18.5833C20.6084 21.25 22.25 19.6084 22.25 17.5833V8.41667C22.25 6.39162 20.6084 4.75 18.5833 4.75Z" fill="white"/>
            <g filter="url(#filter1_d_1038_1200)">
            <path d="M13.6807 9.33325L16.4857 11.9642C16.6309 12.0949 16.747 12.2546 16.8265 12.433C16.906 12.6115 16.9471 12.8046 16.9471 12.9999C16.9471 13.1953 16.906 13.3886 16.8265 13.567C16.747 13.7455 16.6309 13.9052 16.4857 14.0359L13.6807 16.6666" stroke="#118AB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
            </g>
            <path d="M11 11L12.7175 12.4351C12.8064 12.5063 12.8775 12.5935 12.9262 12.6908C12.9749 12.7881 13 12.8934 13 13C13 13.1066 12.9749 13.212 12.9262 13.3093C12.8775 13.4067 12.8064 13.4938 12.7175 13.5651L11 15" stroke="#118AB2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <g clip-path="url(#clip0_1038_1200)">
            <path d="M108.964 5.71619V20.2838C108.964 20.6064 108.833 20.9157 108.598 21.1438C108.364 21.3719 108.046 21.5 107.715 21.5H101.98V18.1009H105.473V7.90063H101.98V4.5H107.715C108.046 4.5 108.364 4.62813 108.598 4.85621C108.833 5.08429 108.964 5.39364 108.964 5.71619Z" fill="#118AB2"/>
            <path d="M91.4771 5.71619V20.2838C91.4771 20.6064 91.6087 20.9157 91.8429 21.1438C92.0772 21.3719 92.3949 21.5 92.7262 21.5H98.4613V18.1009H94.97V7.90063H98.4613V4.5H92.7262C92.3949 4.5 92.0772 4.62813 91.8429 4.85621C91.6087 5.08429 91.4771 5.39364 91.4771 5.71619Z" fill="#118AB2"/>
            <path d="M81 9.11683V16.8848C81 17.2073 81.1316 17.5167 81.3659 17.7447C81.6002 17.9728 81.9179 18.1009 82.2492 18.1009H87.9842V14.7003H84.4929V11.2997H87.9842V7.90063H82.2492C81.9179 7.90063 81.6002 8.02877 81.3659 8.25685C81.1316 8.48493 81 8.79427 81 9.11683V9.11683Z" fill="#118AB2"/>
            <path d="M119.401 9.11683V16.8848C119.401 17.0446 119.369 17.2029 119.306 17.3505C119.243 17.4982 119.151 17.6323 119.035 17.7453C118.919 17.8582 118.781 17.9478 118.629 18.0088C118.477 18.0698 118.315 18.1012 118.151 18.1009H112.416V14.7003H115.908V11.2997H112.416V7.90064H118.151C118.315 7.90043 118.477 7.93174 118.629 7.99276C118.781 8.05379 118.919 8.14334 119.035 8.25629C119.151 8.36925 119.243 8.50339 119.306 8.65105C119.369 8.79871 119.401 8.95698 119.401 9.11683Z" fill="#118AB2"/>
            <path d="M127.926 8.31653H133.308V10.4147H129.325V12.122H132.773V14.206H129.325V15.9715H133.308V18.0853H127.926C127.615 18.0853 127.317 17.9649 127.097 17.7507C126.877 17.5364 126.753 17.2458 126.753 16.9429V9.45896C126.753 9.15597 126.877 8.86539 127.097 8.65114C127.317 8.43689 127.615 8.31653 127.926 8.31653Z" fill="#118AB2"/>
            <path d="M142.533 18.101H139.946V15.6686H137.672V18.101H135.093V9.46993C135.093 9.1668 135.216 8.87605 135.436 8.66155C135.656 8.44706 135.955 8.32634 136.266 8.32593H141.366C141.678 8.32634 141.976 8.44706 142.196 8.66155C142.416 8.87605 142.54 9.1668 142.54 9.46993L142.533 18.101ZM139.946 13.5501V10.6202C139.943 10.5781 139.931 10.537 139.912 10.4994C139.892 10.4617 139.865 10.4284 139.831 10.4013C139.798 10.3742 139.76 10.3539 139.718 10.3416C139.677 10.3293 139.633 10.3254 139.59 10.3299H137.978C137.938 10.3293 137.899 10.3363 137.862 10.3506C137.825 10.3648 137.791 10.3861 137.763 10.4131C137.734 10.44 137.712 10.4722 137.696 10.5078C137.68 10.5433 137.672 10.5815 137.672 10.6202V13.5563L139.946 13.5501Z" fill="#118AB2"/>
            <path d="M144.311 15.9715H148.072C148.175 15.9715 148.233 15.915 148.233 15.8412V14.4289C148.233 14.3551 148.173 14.2986 148.072 14.2986H145.484C145.173 14.2982 144.875 14.1775 144.655 13.963C144.435 13.7485 144.311 13.4578 144.311 13.1546V9.45896C144.311 9.15597 144.435 8.86539 144.655 8.65114C144.875 8.43689 145.173 8.31653 145.484 8.31653H150.673V10.4147H147.045C147.025 10.4147 147.006 10.4184 146.988 10.4256C146.97 10.4329 146.954 10.4435 146.94 10.4569C146.926 10.4703 146.915 10.4863 146.908 10.5038C146.9 10.5213 146.896 10.5401 146.896 10.559V12.0059C146.9 12.0418 146.917 12.0752 146.944 12.0994C146.972 12.1236 147.008 12.1367 147.045 12.1362H149.632C149.787 12.1362 149.94 12.166 150.083 12.224C150.226 12.282 150.356 12.3669 150.466 12.474C150.575 12.5811 150.661 12.7081 150.72 12.8478C150.778 12.9875 150.808 13.1371 150.807 13.288V16.9413C150.807 17.0915 150.776 17.2403 150.717 17.3791C150.658 17.5179 150.572 17.644 150.463 17.7502C150.354 17.8565 150.224 17.9407 150.081 17.9982C149.939 18.0557 149.786 18.0853 149.632 18.0853H144.313L144.311 15.9715Z" fill="#118AB2"/>
            <path d="M155.049 18.0853V15.2198H153.711C153.405 15.2087 153.116 15.0813 152.905 14.8648C152.694 14.6483 152.578 14.36 152.583 14.0617V8.31653H155.162V12.8031C155.162 12.8447 155.179 12.8846 155.209 12.9141C155.24 12.9435 155.281 12.96 155.323 12.96H157.403C157.491 12.96 157.506 12.8878 157.506 12.8157V8.31653H160.093V14.0617C160.098 14.36 159.982 14.6483 159.771 14.8648C159.56 15.0813 159.271 15.2087 158.965 15.2198H157.641V18.0853H155.049Z" fill="#118AB2"/>
            <path d="M164.632 8.31653H167.211V15.9715H170.407V18.0853H165.805C165.494 18.0853 165.196 17.9649 164.976 17.7507C164.755 17.5364 164.632 17.2458 164.632 16.9429V8.31653Z" fill="#118AB2"/>
            <path d="M179.629 18.0853H177.05V15.6529H174.769V18.0853H172.19V9.45426C172.191 9.15262 172.315 8.86372 172.534 8.65058C172.753 8.43744 173.05 8.31735 173.36 8.31653H178.458C178.77 8.31653 179.068 8.43689 179.288 8.65114C179.508 8.86539 179.632 9.15597 179.632 9.45896L179.629 18.0853ZM177.05 13.5344V10.603C177.048 10.5596 177.036 10.517 177.017 10.4781C176.997 10.4391 176.969 10.4046 176.935 10.3768C176.9 10.3489 176.86 10.3282 176.818 10.3161C176.775 10.304 176.73 10.3007 176.685 10.3064H175.074C175.033 10.3051 174.993 10.3117 174.956 10.3257C174.919 10.3397 174.884 10.3608 174.855 10.3878C174.826 10.4149 174.803 10.4473 174.787 10.4831C174.771 10.519 174.763 10.5576 174.762 10.5967V13.5407L177.05 13.5344Z" fill="#118AB2"/>
            <path d="M181.403 16.9429V9.45896C181.403 9.15597 181.527 8.86539 181.747 8.65114C181.967 8.43689 182.266 8.31653 182.577 8.31653H187.588C188.405 8.31653 188.926 8.82184 188.926 9.54684V11.7187C188.926 12.3841 188.479 13.0212 187.557 13.2378C188.479 13.4559 189 14.0632 189 14.7145V16.8409C189 17.6082 188.479 18.0853 187.662 18.0853H182.577C182.266 18.0853 181.967 17.9649 181.747 17.7507C181.527 17.5364 181.403 17.2458 181.403 16.9429ZM186.444 10.4147C186.444 10.3751 186.429 10.337 186.401 10.3079C186.374 10.2788 186.336 10.2609 186.295 10.2577H183.976V12.2821H186.295C186.316 12.2827 186.337 12.2789 186.356 12.271C186.375 12.2632 186.392 12.2514 186.406 12.2365C186.42 12.2217 186.431 12.204 186.437 12.1848C186.444 12.1656 186.446 12.1453 186.444 12.1252V10.4147ZM186.444 14.2358C186.444 14.1963 186.429 14.1582 186.401 14.1291C186.374 14.1 186.336 14.0821 186.295 14.0789H183.976V16.232H186.295C186.315 16.2331 186.335 16.2302 186.353 16.2233C186.372 16.2165 186.389 16.2059 186.403 16.1922C186.417 16.1786 186.428 16.1622 186.435 16.1442C186.442 16.1261 186.445 16.1069 186.444 16.0876V14.2358Z" fill="#118AB2"/>
            </g>
            <defs>
            <filter id="filter0_dd_1038_1200" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1038_1200"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_1038_1200" result="effect2_dropShadow_1038_1200"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1038_1200" result="shape"/>
            </filter>
            <filter id="filter1_d_1038_1200" x="8.93066" y="8.58325" width="12.7666" height="16.8334" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1038_1200"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1038_1200" result="shape"/>
            </filter>
            <clipPath id="clip0_1038_1200">
            <rect width="108" height="17" fill="white" transform="translate(81 4.5)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
        <div className='menu-link'>
          <ul>
            <li className={ location.pathname==="/Home"? "active" : ""}>
              <svg className='left' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <Link to="/Home">الرئسية</Link>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.3334V16.3334" stroke="#0F7CA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.5 9.24162C2.5 6.64162 7.39167 2.16663 10 2.16663C12.6083 2.16663 17.5 6.64162 17.5 9.24162V15.5583C17.4847 16.4322 17.1268 17.2651 16.5033 17.8777C15.8798 18.4902 15.0407 18.8334 14.1667 18.8333H5.83333C4.95929 18.8334 4.12016 18.4902 3.49669 17.8777C2.87322 17.2651 2.5153 16.4322 2.5 15.5583V9.22494" stroke="#0F7CA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li>
            <li className={ location.pathname==="/Join"? "active" : ""}>
              <svg className='left' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <Link to="/Join">الاشتراك</Link>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.819 11.1668H1.20898" stroke="#118AB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.49805 7.76671C2.97305 4.86671 4.40638 3.43337 7.30638 2.95837" stroke="#118AB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.30643 17.9918C4.40643 17.5085 2.9731 16.0835 2.4981 13.1835L2.49727 13.1868C2.39643 12.5868 2.33893 11.9118 2.32227 11.1702" stroke="#118AB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.7052 11.17C17.6885 11.9117 17.6302 12.5867 17.5302 13.1867L17.5318 13.1834C17.056 16.0834 15.6227 17.5084 12.7227 17.9917" stroke="#118AB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7227 2.95837C15.6227 3.43337 17.056 4.86671 17.531 7.76671" stroke="#118AB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
            <li className={ location.pathname==="/ChangePassword"? "active" : ""}>
              <svg className='left'width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <Link to="/ChangePassword">تغيير كلمة المرور</Link>
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8333 7.33329H14.6667C15.1269 7.33329 15.5 7.70638 15.5 8.16663V16.5C15.5 16.9602 15.1269 17.3333 14.6667 17.3333H1.33333C0.8731 17.3333 0.5 16.9602 0.5 16.5V8.16663C0.5 7.70638 0.8731 7.33329 1.33333 7.33329H2.16667V6.49996C2.16667 3.2783 4.77834 0.666626 8 0.666626C11.2217 0.666626 13.8333 3.2783 13.8333 6.49996V7.33329ZM2.16667 8.99996V15.6666H13.8333V8.99996H2.16667ZM7.16667 10.6666H8.83333V14H7.16667V10.6666ZM12.1667 7.33329V6.49996C12.1667 4.19878 10.3012 2.33329 8 2.33329C5.69882 2.33329 3.83333 4.19878 3.83333 6.49996V7.33329H12.1667Z" fill="#0E6E8E"/>
              </svg>
            </li> 
            {/* <li className={ location.pathname==="/Appdata"? "active" : ""}>
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
            <li className={ location.pathname==="/Settings"? "active" : ""}>
               <svg className='left'width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99943 12.6667L6.55941 9.33337C6.37782 9.162 6.23316 8.95539 6.13428 8.72611C6.0354 8.49684 5.98438 8.24973 5.98438 8.00004C5.98438 7.75035 6.0354 7.50324 6.13428 7.27397C6.23316 7.04469 6.37782 6.83808 6.55941 6.66671L9.99943 3.33337" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <Link to="/Settings">الاعدادات</Link>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6668 18V16.3333C16.6668 15.4493 16.3156 14.6014 15.6905 13.9763C15.0654 13.3512 14.2176 13 13.3335 13H6.66683C5.78277 13 4.93493 13.3512 4.30981 13.9763C3.68469 14.6014 3.3335 15.4493 3.3335 16.3333V18" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.99984 9.66667C11.8408 9.66667 13.3332 8.17428 13.3332 6.33333C13.3332 4.49238 11.8408 3 9.99984 3C8.15889 3 6.6665 4.49238 6.6665 6.33333C6.6665 8.17428 8.15889 9.66667 9.99984 9.66667Z" stroke="#909EA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li> */}
          </ul>
        </div>
      </div>
    )
  }

export default PhoneMenu
