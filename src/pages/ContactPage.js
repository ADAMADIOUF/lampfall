import React from 'react'
import Map from '../components/Map'

const ContactPage = () => {
  return (
    <>
      <div className='hero-contact'>
        <div className='hero-banner'>
          <h1 className='hero-title'>lamp fall house est á votre écoute.</h1>
          <p className='hero-text'>
            Laissez-nous vos coordonnées ainsi que votre message, nous
            reviendrons vers vous le plus rapidement possible.
          </p>
        </div>
      </div>
      <div className='contact-form section-center'>
        <form className='form'>
          <div>
            <h3>prénom</h3>
            <input type='text' className='input-contact' />
          </div>
          <div>
            <h3>nom</h3>
            <input type='text' className='input-contact' />
          </div>
          <div>
            <h3>votre-email</h3>
            <input type='email' className='input-contact' />
          </div>
          <div>
            <h3>teléphone/whatsApp</h3>
            <input type='number' className='input-contact' />
          </div>
          <div>
            <h3>votre message</h3>
            <textarea
              name=''
              id=''
              cols='50'
              rows='10'
              className='input-contact'
            ></textarea>
          </div>
          <button className='btn btn-contact'>envoyer</button>
        </form>
        <div className='contact-number'>
          <div>
            <span>telephone</span>
            <h3>+221 77 345 65 62</h3>
          </div>
          <div>
            <span>email</span>
            <h3>lampfallhouse.com</h3>
          </div>
        </div>
      </div>
      <Map/>
    </>
  )
}

export default ContactPage