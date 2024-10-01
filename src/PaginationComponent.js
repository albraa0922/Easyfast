import React, { useState, } from 'react'
import {usersData} from "./Object.js"
import Additions from './Additions.js';
import AddNew from "./AddNew.js"

import "./PaginationComponent"
function PaginationComponent( props) {
  const [allData, setAllData] = useState(usersData)
  const removeItem = (index) => {
    const updatedData = allData.filter((_, i) => i !== index);
    setAllData(updatedData);
};

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(allData.length/props.itemsPerPage)
    const currentData = allData.slice((currentPage-1)*props.itemsPerPage,currentPage*props.itemsPerPage);
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
    
    const handleNewData = (data) => {
      setAllData([data ,...allData])
    }
  return (
    <div className='pageBut'>
      {currentData?.map((user, index) =>(
            <Additions
            key      = {index}
            index    = {index}
            userName = {user.name}
            userPohto= {user.photo}
            email    = {user.email}
            code     = {user.code}
            userCategory={user.userCategory}
            userRate = {user.userRate}
            removeItem = {removeItem}
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
        <AddNew isopen={props.isopen} openForm={props.openForm} sendData = { handleNewData}></AddNew>
    </div>
    
  )
}

export default PaginationComponent