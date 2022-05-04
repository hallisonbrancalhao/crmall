import React from 'react'
import { Canal } from '../../components';
import './Canais.css';
import imagem1 from '../../assets/canal1.png';
import imagem2 from '../../assets/canal2.png';
import imagem3 from '../../assets/canal3.png';
import imagem4 from '../../assets/canal4.png';

const Canais = () => {
  return (
    <div className="crmall__canais scale-up-center">
      <div className="crmall__canais-titulo section__margin">
        <p className="crmall__canais-titulo_numero">2</p>
        <p className="crmall__canais-titulo_texto">Escolha os canais pelos quais seus clientes participarão</p>
      </div>
      <div className="crmall__canais-components section__margin">
        <Canal img={imagem1} title="Sorteio - Número da Sorte" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
        <Canal img={imagem2} title="Comprou Ganhou" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
        <Canal img={imagem3} title="Prêmio Instantâneo" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
        <Canal img={imagem4} title="Via Instagram" text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"/>
      </div>
    </div>
  )
}

export default Canais