import React from 'react'
import { useState } from 'react'
import "./HomeContent.css"
import HomeCard from './HomeCard.js'
import {cardData} from "../Object.js"
import Buttuon from '../Button.js'
import PaginationComponent from './PaginationComponent.js'
function HomeContent() {
  const [cards, setCards] = useState(cardData);

  const [show, setShow] = useState(true)
  const change =() => { 
     setShow(!show)
  }
  const [isopen, setIsopen] = useState(false)
  const openForm = () =>{
        setIsopen(!isopen)
  }
  return (
    <div className='HomeContent'>
        <div>
          {cards?.map((card,index) =>(
            <HomeCard
            index={index}
            title= {card.title}
            number= {card.number}
            percent = {card.percent}
            >
            </HomeCard>
          ))}
        </div>
        <div className='clear'></div>
        <div className={show?"show" : "hight"}>
          <div className='addtit'>
            <Buttuon handleClick={openForm}>إضافة سجل جديد   +</Buttuon>
            <p>اخر الاضافات</p>
            <div className='addlable'>
              <p>اسم المستخدم</p>
              <p>البريد الالكتروني</p>
              <p>الكود</p>
              <p>فئة المستخدم</p>
              <p>تصنيف المستخدم</p>
              <p>إضافة   ازاله</p>
            </div>
            <PaginationComponent itemsPerPage={7} isopen={isopen} openForm={openForm} change={change}></PaginationComponent>
          </div>
        </div>
        <div  className='showBut'>
          {show && <button onClick={change}><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M12.8332 1.5L8.6665 5.79993C8.45229 6.02692 8.19392 6.20774 7.90733 6.33134C7.62073 6.45494 7.31195 6.51872 6.99984 6.51872C6.68773 6.51872 6.37889 6.45494 6.0923 6.33134C5.8057 6.20774 5.54739 6.02692 5.33317 5.79993L1.1665 1.5" stroke="#0F7CA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        عرض الكل 
          </button>}
        </div>
    </div>
    
      
  )
}

export default HomeContent
