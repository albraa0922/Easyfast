import React, { useState } from 'react'
import {usersData} from "./Object.js"
import Additions from './Additions.js';
import "./PaginationComponent"
function PaginationComponent({itemsPerPage}) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(usersData.length/itemsPerPage)
    const currentData = usersData.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage);
    const handleNextPage = () =>{
        if (currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }}
    const handlePreviousPage = () =>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }}
    const goToPage = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

  return (
    <div className='pageBut'>
      {currentData?.map((user, index) =>(
            <Additions
            key      = {index}
            index    = {index}
            userName = {user.userInfo.name}
            userPohto= {user.userInfo.photo}
            email    = {user.email}
            code     = {user.code}
            userCategory={user.userCategory}
            userRate = {user.userRate}
            >
            </Additions>
          ))}
          <button onClick={handlePreviousPage} disabled={currentPage===1}>
            السابق    
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
      ))}
          <button onClick={handleNextPage} disabled={currentData===totalPages}>
            التالي    
          </button>
    </div>
  )
}

export default PaginationComponent