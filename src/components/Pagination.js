import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ productsPerPage ,totalProducts,paginate}) => {
 const pageNumbers=[]
 for(let i = 1; i<= Math.ceil(totalProducts/productsPerPage); i++){
  pageNumbers.push(i)
 }
  return <div className='pagination'>
  <ul className="pagination-number">
   {pageNumbers.map(number =>(
    <li key={number} className="page-item">
     <Link to="#" onClick={()=> paginate(number)}  className='page-link'> 
     {number}
     </Link>
    </li>
   ))}
  </ul>
  </div>
}

export default Pagination