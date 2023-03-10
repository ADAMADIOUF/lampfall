import React from 'react'
import logo from "../assets/logofooter.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt='' className='logo' />
        <h5>
          LAMP FALL HOUSE <span>LE PORTAIL IMMOBILER DU SÉNÉGAL</span>
        </h5>
      </div>
      <div className='footer-container'>
        <article className='informations'>
          <h6>lamp fall house,le portail immobilier du sénégal,</h6>
          <span>+221 77 345 65 62</span>
          <p>lampfallhouse.com</p>
        </article>
        <article className='populaires'>
          <a href='/land'>
            <p>annonces de vente</p>
          </a>
          <a href='/rent'>
            <p>annonces de location</p>
          </a>
          <a href='/house'>
            <p>appartement á louer au seneagl</p>
          </a>
          
        </article>
        <article className='rapide'>
          <p>liens rapides:</p>
          <a href='/about'>
            <p>qui sommes-nous?</p>
          </a>
          <a href='/contact'>
            <p>nous contactez</p>
          </a>
        </article>
      </div>
      <div className='date-footer'>
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span> lampfallhouse</span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
    </div>
  )
}

export default Footer