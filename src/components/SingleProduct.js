import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'

import { BiBed } from 'react-icons/bi'
import { BsFillHouseHeartFill, BsBorderInner, BsHammer } from 'react-icons/bs'
import { GiHomeGarage, GiSpookyHouse } from 'react-icons/gi'
import { FaBath } from 'react-icons/fa'
import { FiLayers } from 'react-icons/fi'

import Loading from './Loading'
import Error from './Error'
import ProductImages from './ProductImages'
import { Link } from 'react-router-dom'
import Featured from './Featured'

const SingleProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [])
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const { img, name, price, telephone,i ,s, t,c, st,g,a, description, addresse } =
    product

  return (
    <section className='section-center single-product'>
      <div className='section section-center page'>
        <Link to={`/`} className='btn'>
          accueil
        </Link>
        <div className='product-center'>
          <ProductImages images={img} />
          <section className='single-product-detail'>
            <h2>{name}</h2>

            <div className='price'>
              <h3>prix:</h3>
              <h2>{price}CFA</h2>
            </div>
            <div className='desc'>
              <h3>description:</h3>
              <p>{description}</p>
            </div>

            <hr />
            <div className='single-product-footer'>
              <div>
                <h3>
                  addresse:
                  <span>{addresse}</span>
                </h3>
                <div className='single-product-information'>
                  <div>
                    <span className='icons-link'>
                      <BsBorderInner />
                    </span>
                    <span className='span-icons'>{i}</span>
                  </div>
                  <div>
                    <span className='icons-link'>
                      <BsFillHouseHeartFill />
                    </span>
                    <span className='span-icons'>{t}</span>
                  </div>
                  <div>
                    <span className='icons-link'>
                      <FiLayers />
                    </span>
                    <span className='span-icons'>{st}</span>
                  </div>
                  <div>
                    <span className='icons-link'>
                      <BsHammer />
                    </span>
                    <span className='span-icons'>{a}</span>
                  </div>
                  <div>
                    <span className='icons-link'>
                      <BiBed />
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
                      <GiHomeGarage />
                    </span>
                    <span className='span-icons'>{g}</span>
                  </div>
                </div>
                <h3>
                  telephone:
                  <span>{telephone}</span>
                </h3>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Featured/>
    </section>
  )
}


export default SingleProductPage
