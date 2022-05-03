import React from 'react'
import { Formato } from '../../components'
import './Formatos.css'
import icon1 from '../../assets/num-sorte.svg'
import icon2 from '../../assets/comprou-ganhou.svg'
import icon3 from '../../assets/premio-instantaneo.svg'
import icon4 from '../../assets/via-instagram.svg'

const Formatos = () => {
  return (
    <div className="crmall__formatos">
      <div className="crmall__formatos-titulo section__margin">
        <p className="crmall__formatos-titulo_numero">1</p>
        <p className="crmall__formatos-titulo_texto">Escolha um formato para sua promoção</p>
      </div>
      <div className="crmall__formatos-components section__margin">
        <Formato icon={icon1} title="Sorteio - Número da Sorte" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
        <Formato icon={icon2} title="Comprou Ganhou" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
        <Formato icon={icon3} title="Prêmio Instantâneo" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
        <Formato icon={icon4} title="Via Instagram" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
      </div>
    </div>
  )
}

export default Formatos