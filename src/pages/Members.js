import React from 'react'
import "./Members.css"
import SideMenu from"../SideMenu"
import NavBar  from "../NavBar/NavBar"
import PaginationComponent from '../Home/PaginationComponent'

export default function Members() {
  return (
    <div>
      <NavBar></NavBar>
      <SideMenu></SideMenu>
      <div className='pageCont'>
        <PaginationComponent itemsPerPage={999} ></PaginationComponent>
      </div>
    </div>
  )
}
