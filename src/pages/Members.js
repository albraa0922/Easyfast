import React from 'react'
import SideMenu from"../SideMenu"
import NavBar  from "../NavBar/NavBar"
import PaginationComponent from '../Home/PaginationComponent'

export default function Members() {
  return (
    <div>
      <NavBar></NavBar>
      <SideMenu></SideMenu>

      <div className='pageCont' style={{width : "1030px", margin:"150px 60px 40px", backgroundColor:"#fff", borderRadius:"10px"}}>
        <PaginationComponent itemsPerPage={999} ></PaginationComponent>
      </div>
    </div>
  )
}
