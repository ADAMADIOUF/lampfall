
import { useProductsContext } from '../context/products_context'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import { BiBed } from 'react-icons/bi'
import { BsFillHouseHeartFill, BsBorderInner, BsHammer } from 'react-icons/bs'
import { GiHomeGarage, GiSpookyHouse } from 'react-icons/gi'
import { FaBath } from 'react-icons/fa'
import { FiLayers } from 'react-icons/fi'

import Loading from './Loading'
import Error from './Error'
const Featured = () => {
 const {
   products_loading: loading,
   products_error: error,
   featured_products: featured,
 } = useProductsContext()
if (loading) {
  return <Loading />
}
if (error) {
  return <Error />
}
  return (
    <div>
      <div className='featured-products'>
        <h3>bien similiaires que vous pourriez aimer</h3>
       
          <div className='featured-container'>
            {featured.map((product) => {
              const {
                img,
                name,
                price,
                telephone,
                i,
                s,
                id,
                t,
                c,
                st,
                g,
                a,
                rent,
                description,
                addresse,
              } = product
              return (
                <div>
                  
                    <div key={id} className='featured-content'>
                      <a href={`/products/${id}`}>
                        <img src={img} alt='' className='gallery-img' />
                        <h5>{name}</h5>
                        <p>{price}CFA</p>
                        <div className='single-product-information'>
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
                        <div className='rent'>
                        <h4>{rent}</h4>
                      </div>
                      </a>
                    </div>
               
                </div>
              )
            })}
          </div>
      
      </div>
      
    </div>
  )
}

export default Featured