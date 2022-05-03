import React from 'react'
import './SubBanner.css'
import notebook from '../../assets/notebook.png'
import graficoBrasil from '../../assets/infograficos.png'

const SubBanner = () => {
  return (
    <div className="crmall__subBanner section__margin">
        <div className="crmall__subBanner-textos">
            <h2> É sobre promoção? Conte com quem mais entende do assunto!</h2>
            <p> Se você pensa em promover campanhas diferenciadas, com formatos de participação simples e experiências marcantes, nós somos a escolha certa. A CRMALL conta com a expertise de quem já facilitou a <strong>participação de 20 milhões de pessoas </strong> em todo o Brasil.</p>
        </div>
        <div className="crmall__subBanner-imagens">
            <img className="crmall__subBanner-imagens_notebook" src={notebook} />
            <img className="crmall__subBanner-imagens_infografico"  src={graficoBrasil} />
        </div>
    </div>
  )
}

export default SubBanner