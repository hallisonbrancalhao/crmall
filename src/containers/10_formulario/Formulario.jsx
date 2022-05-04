import React from 'react'
import './Formulario.css'
import imgForm from '../../assets/formulario-img.png'

const Formulario = () => {
  return (
    <div className='gradient-azul-roxo'> 
      <div className='crmall__formulario section__margin '>
        <div className="crmall__formulario-textos">
          <h2>Vamos falar sobre promoção!</h2>
          <img src={imgForm} alt="" />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus</p>
        </div>
        <div className="crmall__formulario-form">
          <div className="crmall__formulario-form_titulo"><p>Mensagem</p></div>
          <div className="crmall__formulario-form_inputs">
            
            <label>Nome</label>
            <input className="crmall__formulario-form_inputs-full" type="text" placeholder='Digite o seu nome' />
            <label>E-mail</label>
            <input className="crmall__formulario-form_inputs-full" type="email" placeholder='Digite o seu e-mail' />
            
            <div className="crmall__formulario-form_inputs-telefones">
              <div>
                <label>Telefone celular</label>
                <input className="crmall__formulario-form_inputs-mid" type="phone" placeholder='( ) ____ _____' />
              </div>
              <div>
                <label>Telefone fixo</label>
                <input className="crmall__formulario-form_inputs-mid" type="phone" placeholder='( ) ____ _____' />
              </div>
            </div>
            <label>Mensagem</label>
            <input className="crmall__formulario-form_inputs-full" type="email" placeholder='Digite sua mensagem' />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Formulario