import React from 'react'
import { Features } from '../../components'
import './TiposDeNegocios.css'
import img from '../../assets/cases-img.png'

const TiposDeNegocios = () => {
  return (
    <div className=' gradient-azul-rosa'>
      <div className="section__margin crmall__tiposDeNegocios">
        <div className="crmall__tiposDeNegocios-img">
          <img src={img} alt="" />
        </div>
        <div className="crmall__tiposDeNegocios-textos">
          <h1>Promo serve para quais tipos de negócio?</h1>
          <p>A resposta é muito simples: praticamente qualquer tipo de negócio que busque estreitar o relacionamento com seu público através de promoções pode lançar campanhas.</p>
        </div>
        <div className="crmall__tiposDeNegocios-caixas">
         <Features />
        </div>
      </div>
    </div>
  )
}

export default TiposDeNegocios