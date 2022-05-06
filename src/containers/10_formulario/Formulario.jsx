import React from 'react'
import './Formulario.css'
import imgForm from '../../assets/formulario-img.png'

const Formulario = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefoneFixo, setTelefoneFixo] = React.useState('');
  const [telefoneCelular, setTelefoneCelular] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      nome: e.target.elements.nome.value,
      email:e.target.elements.email.value,
      telefoneFixo:e.target.elements.telefoneFixo.value,
      telefoneCelular:e.target.elements.telefoneCelular.value,
    }
    console.log(data)

  }

 
  return (
    <div className='gradient-azul-roxo' id='contato' > 
      <div className='crmall__formulario section__margin '>
        <div className="crmall__formulario-textos">
          <h2>Vamos falar sobre promoção!</h2>
          <img src={imgForm} alt="" />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="crmall__formulario-form">
            <div className="crmall__formulario-form_titulo"><p>Mensagem</p></div>
            <div className="crmall__formulario-form_inputs">
              
              <label>Nome</label>
              <input  name="nome" className="crmall__formulario-form_inputs-full" type="text" placeholder='Digite o seu nome' />
              <label>E-mail</label>
              <input name="email" className="crmall__formulario-form_inputs-full" type="email" placeholder='Digite o seu e-mail' />
              
              <div className="crmall__formulario-form_inputs-telefones">
                <div>
                  <label>Telefone celular</label>
                  <input name="telefoneCelular" className="crmall__formulario-form_inputs-mid" type="tel" placeholder='( __ ) ____ _____' />
                </div>
                <div>
                  <label>Telefone fixo</label>
                  <input name="telefoneFixo" className="crmall__formulario-form_inputs-mid" type="tel" placeholder='( __ ) ____ _____' />
                </div>
              </div>
              <label>Mensagem</label>
              <input className="crmall__formulario-form_inputs-full" type="text" placeholder='Digite sua mensagem' />
              <div className="crmall__formulario-form_inputs-container">          
                <button className='crmall__formulario-form_inputs-botao' type="submit">Enviar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="crmall__formulario-sub">
        <h2 className="section__margin">PROMO é um serviço desenvolvido e prestado por CRMALL Sistemas de Informação de Marketing</h2>
      </div>
    </div>
  )
}

export default Formulario