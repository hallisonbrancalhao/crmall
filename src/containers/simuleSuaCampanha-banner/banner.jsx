import React from 'react'
import './banner.css'
import img from '../../assets/banner-simuleSuaCampanha.png'

const SimuleSuaCampanhaBanner = () => {
  return (
    <div className='crmall__simulesuacampanha-banner'>
        <img src={img} alt="Imagem banner" />
        <h1 className="section__margin crmall__simulesuacampanha-banner_texto">Simule sua campanha</h1>
    </div>
  )
}

export default SimuleSuaCampanhaBanner