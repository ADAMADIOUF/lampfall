import React from 'react'
import { useProductsContext } from '../context/products_context'
import Loading from './Loading'
import Error from './Error'

import { BiBed } from 'react-icons/bi'
import { BsFillHouseHeartFill, BsBorderInner, BsHammer } from 'react-icons/bs'
import { GiHomeGarage, GiSpookyHouse } from 'react-icons/gi'
import { FaBath } from 'react-icons/fa'
import { FiLayers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Lands = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products_four: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <>
      <div className='hero-land'>
        <div className='hero-banner'>
          <h1 className='hero-title'>découvrez votre nouvelle maison</h1>
          <p className='hero-text'>
            Aider 2 millions de locataires à trouver leur bonheur.
          </p>
          <a href='#featured' className='btn btn-hero'>
            achat /terrain
          </a>
        </div>
      </div>
      <section className='section-center'>
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
      </section>
    </>
  )
}

export default Lands