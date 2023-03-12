import React, { useState } from 'react'
import { useProductsContext } from '../context/products_context'
import Loading from "./Loading"
import Error from "./Error"
import Pagination from './Pagination'
import {BiBed} from "react-icons/bi"
import { BsFillHouseHeartFill, BsBorderInner, BsHammer } from 'react-icons/bs'
import { GiHomeGarage, GiSpookyHouse } from 'react-icons/gi'
import {FaBath} from "react-icons/fa"
import{FiLayers} from "react-icons/fi"
import { Link } from 'react-router-dom'
const Products = () => {
 const {
   products_loading: loading,
   products_error: error,
  products
 } = useProductsContext()
const[currentPage,setCurrentPage]= useState(1)
const[productsPerPage]= useState(4)
 if (loading) {
   return <Loading />
 }
 if (error) {
   return <Error />
 }
 const indexOfLastProduct = currentPage * productsPerPage
 const indexOfFirstProduct = indexOfLastProduct - productsPerPage
 const currentProduct = products.slice(indexOfFirstProduct,indexOfLastProduct)
 const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div className='products section-center'>
      <div className='products-container'>
        {currentProduct.map((product) => {
          const { img, name, price,telephone, id, s, c, st, rent } = product
          return (
            <div key={id} className='product-detail'>
              <a href={`/products/${id}`}>
                <div className='product-f-img'>
                  <img src={img} alt={name} className='product-img' />
                </div>
                <h5>{name}</h5>

                <div className='product-icons'>
                  <div>
                    <span className='icons-link'>
                      <BsFillHouseHeartFill />
                    </span>
                    <span className='span-icons'>{c}</span>
                  </div>
                  <div>
                    <span className='icons-link'>
                      <FaBath />
                    </span>
                    <span className='span-icons'>{s}</span>
                  </div>
                  <div>
                    <span className='icons-link'>
                      <BsBorderInner />{' '}
                    </span>
                    <span className='span-icons'>{st}</span>
                  </div>
                </div>
                <hr />
                <div className='price'>
                  <h3>{price} CFA</h3>
                  <h5>tel:{telephone}</h5>
                </div>
                <div className='rent'>
                  <h5>{rent}</h5>
                </div>
              </a>
            </div>
          )
        })}
      </div>
     
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Products