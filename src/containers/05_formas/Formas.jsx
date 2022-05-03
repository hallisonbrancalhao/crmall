import React from 'react';
import './Formas.css';
import img1 from '../../assets/form1.png';
import img2 from '../../assets/form2.png';
import img3 from '../../assets/form3.png';
import img4 from '../../assets/form4.png';

const Formas = () => {
  return (
    <div className="crmall__formas banner__formas">
      <div className="crmall__formas-titulo section__margin">
        <p className="crmall__formas-titulo_numero">3</p>
        <p className="crmall__formas-titulo_texto">Ofereça formas divertidas na hora de contemplar ganhadores!</p>
      </div>

      <div class="parent section__margin">
        <div class="div1"> <img src={img1} alt="" /> </div>
        <div class="div2"> <img src={img2} alt="" /> </div>
        <div class="div3"> <img src={img3} alt="" /> </div>
        <div class="div4"> <img src={img4} alt="" /> </div>
      </div>
    </div>
  )
}

export default Formas