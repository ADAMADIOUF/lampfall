import React from 'react'
import logo from '../assets/logo.png'
const AboutPage = () => {
  return (
    <>
      <div className='hero-about'>
        <div className='hero-banner'>
          <h1 className='hero-title'>lamp fall house est á votre écoute.</h1>
          <p className='hero-text'>
            Laissez-nous vos coordonnées ainsi que votre message, nous
            reviendrons vers vous le plus rapidement possible.
          </p>
        </div>
      </div>
      <div className='about-container section-center'>
        <article>
          <img src={logo} alt='' />
        </article>
        <article>
          <p>
            <span>lamp fall house</span> est un portail immobilier, dont la
            mission est de permettre à chacun des utilisateurs de bénéficier
            d’une expérience immobilière simple et efficace, et de leur assurer
            sérénité et confiance dans leur recherche, que cela soit pour leur
            projet d’achat, de mise en vente, de location. En effet, seules les
            annonces de professionnels certifiés et enregistrés en tant que tels
            sont proposées sur cette plateforme.
          </p>
          <p>
            <span>dans quel but?:</span>– Pour les particuliers : accéder à un
            large choix de biens immobiliers, sans avoir la crainte de payer un
            surplus du fait d’intermédiaires entre le vendeur et la personne.
            C’est aussi l’assurance de bénéficier de toute l’expertise
            professionnel, et s’éviter les ennuis que peuvent mener une vente de
            particulier à particulier. – Pour les professionnels : cette
            plateforme représente enfin une opportunité de communiquer de façon
            claire et exhaustive, du fait des nombreuses fonctionnalités de la
            plateforme, et ainsi leur assurer une grande visibilité. C’est aussi
            pour eux le moyen de se départir de la concurrence déloyale que
            peuvent engendrer les intermédiaires de tout bord.
          </p>
          <p>
            <span>lamp fall house</span>
            vous assure une vente ou location au meilleur prix, puisque la
            plateforme ne touche aucune commission sur les transactions. En
            conclusion, notre ambition est de proposer à chacun une expérience
            personnalisée et adaptée à ses propres besoins, ses propres envies.
            L’immobilier est un métier, et ce sont les professionnels qui en
            parlent le mieux.
          </p>
        </article>
      </div>
    </>
  )
}

export default AboutPage