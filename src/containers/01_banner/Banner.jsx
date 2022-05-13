import React from 'react'
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div id="home" className="crmall__banner banner-principal">
      <div className="crmall__banner-textos section__margin">
          <h1><strong>PROMOÇÕES</strong> CRIATIVAS 
              GERAM EXPERIÊNCIAS 
              <strong> MARCANTES</strong></h1>
          <p>Faça ações promocionais que geram engajamento com seu público.</p>
          <Link to="/simular-campanhas">
            <button type='button'>Simular Campanha</button>
          </Link>
      </div>
    </div>
  )
}

export default Banner