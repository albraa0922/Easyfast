import React from 'react'
import "./HomeCard.css"

function HomeCard(props) {
  return (
    <div className='card'>
     <div className='up'>
        <span className={props.index %2===0? "odd":"even"}></span>
        <p>{props.title}</p>
     </div>
     <div className='down'>
        <p className="num">{props.number}</p>
        <div className={props.index %2===0? "oddww":"evenww"}>
          <p className='p'>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.53223 10.0833V0.916626" stroke="#CCA752" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <path d="M2.2915 3.66667L4.58317 1.30171C4.70099 1.17686 4.84307 1.0773 5.0007 1.00932C5.15832 0.941338 5.32818 0.906372 5.49984 0.906372C5.6715 0.906372 5.84135 0.941338 5.99898 1.00932C6.15661 1.0773 6.29868 1.17686 6.4165 1.30171L8.70817 3.66667" stroke="#CCA752" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                            {props.percent}%
          </p>
        </div>
     </div>
    </div>
  )
}

export default HomeCard
