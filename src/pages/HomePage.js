import React,{useEffect} from 'react'
import Banner from '../components/Banner'
import h from "../assets/home1.gif"
import h1 from '../assets/home2.gif'
import h2 from '../assets/home3.gif'
import h4 from '../assets/home4.gif'
import h5 from '../assets/home5.gif'
import h6 from '../assets/home6.gif'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import Products from '../components/Products'

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 50,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div>
      <Banner />
      <Products />
      <section className='section-center home'>
        <div className='home-title'>
          <h3 data-aos='fade-up'>
            numéro 1 des annonces immobiliéres au senegal
          </h3>
          <p data-aos='fade-right'>
            <span> LAMP FALL HOUSE </span>
            contactez nous pour plus d'informations
          </p>
          +221 77 345 65 62
        </div>
        <div className='home-container'>
          <article className='home-content'>
            <h3>La location en toute simplicité</h3>
            <a href={`/rent`}>
              <button className='btn'>louer</button>
            </a>
            <p>
              Parcourez les annonces de la plus haute qualité, postulez en
              ligne, signez votre bail et payez même votre loyer à partir de
              n'importe quel appareil.
            </p>
          </article>
          <article data-aos='fade-up' className='home-img'>
            <img src={h} alt='' />
          </article>
          <article data-aos='fade-up' className='home-img'>
            <img src={h1} alt='' />
          </article>
          <article className='home-content'>
            <h3>Conseils aux locataires</h3>
            <a href={`/contact`}>
              <button className='btn'>contactez nous</button>
            </a>
            <p>
              Pourquoi devriez-vous chercher un appartement sur lamp fall house?
            </p>
          </article>
          <article className='home-content'>
            <h3>PROPRIÉTAIRES</h3>
            <a href={`/land`}>
              <button className='btn'>acheter votre terrain</button>
            </a>
            <p>
              Vous avez un logement à vendre ou à louer? Déposez une annonce et
              trouver un locataire ou acheteur sérieux.
            </p>
          </article>
          <article data-aos='fade-up' className='home-img'>
            <img src={h2} alt='' />
          </article>
        </div>
        <div className='home-two'>
          <h3>L'endroit idéal pour gérer votre propriété</h3>
          <p>
            Travailler avec la meilleure suite d'outils de gestion immobilière
            du marché.
          </p>
        </div>
        <div className='home-container-two'>
          <article className='home-content'>
            <h3>Annoncez votre location</h3>
            <a href={`/contact`}>
              <button className='btn'>contactez nous</button>
            </a>
            <p>
              Entrez en contact avec plus de 75 millions de locataires à la
              recherche d'un nouveau logement grâce à notre plateforme marketing
              complète.
            </p>
          </article>
          <article data-aos='fade-up' className='home-img'>
            <img src={h4} alt='' />
          </article>
          <article data-aos='fade-up' className='home-img'>
            <img src={h5} alt='' />
          </article>
          <article className='home-content'>
            <h3>Location 100% en ligne</h3>
            <a href={`/rent`}>
              <button className='btn'>louer</button>
            </a>
            <p>
              Acceptez des candidatures, traitez les paiements de loyer en ligne
              et signez des baux numériques, le tout sur une seule et même
              plateforme.
            </p>
          </article>
          <article className='home-content'>
            <h3>Ressources pour les gestionnaires immobiliers</h3>
            <a href={`/rent`}>
              <button className='btn'>louer</button>
            </a>
            <p>
              Restez informé grâce à nos conseils et guides sur le paiement des
              loyers, la location, les solutions de gestion et bien plus encore.
            </p>
          </article>
          <article data-aos='fade-up' className='home-img'>
            <img src={h6} alt='' />
          </article>
        </div>
      </section>
    </div>
  )
}

export default HomePage