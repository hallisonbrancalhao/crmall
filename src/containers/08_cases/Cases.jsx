import React from 'react'
import './Cases.css'
import banner from '../../assets/banner-case1.png'

const Cases = () => {
  return (
    <div className='crmall__cases'>
      <div className='crmall__cases-container section__margin'>
        <h1>Últimos trabalhos realizados</h1>
        <div className="crmall__cases-slider">
          <img src={banner} alt="" />
        </div>
        <div className='crmall__cases-descricao'>
          <h2>Koch Supermercados</h2>
          <p>Campanha Natal Premiado 2021</p>
          <button> Ver amostras de Hotsites</button>
        </div>
      </div>
    </div>
  )
}

export default Cases