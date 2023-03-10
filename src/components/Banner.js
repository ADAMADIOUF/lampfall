import React from 'react'
import b from "../assets/banner.jpeg"
import t from '../assets/top.gif'

const Banner = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero-banner'>
          <h1 className='hero-title'>découvrez votre nouvelle maison</h1>
          <p className='hero-text'>
            Aider 2 millions de locataires à trouver leur bonheur.
          </p>
          <a href='/rent' className='btn btn-hero'>
            explore tours
          </a>
        </div>
      </div>
      
    </>
  )
}

export default Banner
