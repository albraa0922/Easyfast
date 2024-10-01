import React from 'react'
import SideMenu from"../SideMenu"
import NavBar  from "../NavBar"
import PaginationComponent from '../PaginationComponent'
import AddNew from '../AddNew'

export default function Members() {
  return (
    <div>
      <NavBar></NavBar>
      <SideMenu></SideMenu>
      <div className='pageCont' style={{width : "1030pxpx", margin:"150px 60px", backgroundColor:"#fff", borderRadius:"10px"}}>
        <PaginationComponent itemsPerPage={999} ></PaginationComponent>
      </div>
    </div>
  )
}
