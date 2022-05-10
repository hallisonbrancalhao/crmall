import React , { useRef } from 'react'
import './Formulario.css'
import imgForm from '../../assets/formulario-img.png'
import emailjs from 'emailjs-com';

const Formulario = () => {
  const form = useRef();
  //const [nome, setNome] = React.useState('');
  //const [email, setEmail] = React.useState('');
  //const [telefoneFixo, setTelefoneFixo] = React.useState('');
  //const [telefoneCelular, setTelefoneCelular] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('contato_crmall', 'template_zorz93q', form.current, 'iVJ-w2D3sb4090a5f')
      .then((result) => {
          alert('Mensagem enviada com sucesso!')
      }, (error) => {
        alert(error.message)
      });
      e.target.reset();
  }

  return (
    <div className='gradient-azul-roxo' id='contato' > 
      <div className='crmall__formulario section__margin '>
        <div className="crmall__formulario-textos">
          <h2>Vamos falar sobre promoção!</h2>
          <img src={imgForm} alt="" />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus</p>
        </div>
        <form ref={form} onSubmit={onSubmit} name="contato">
          <div className="crmall__formulario-form">
            <div className="crmall__formulario-form_titulo"><p>Mensagem</p></div>
            <div className="crmall__formulario-form_inputs">
              
              <label>Nome</label>
              <input required id="nome"  name="nome" className="crmall__formulario-form_inputs-full" type="text" placeholder='Digite o seu nome' />
              <label>E-mail</label>
              <input required id="email" name="email" className="crmall__formulario-form_inputs-full" type="email" placeholder='Digite o seu e-mail' />
              
              <div className="crmall__formulario-form_inputs-telefones">
                <div>
                  <label>Telefone celular</label>
                  <input id="celular" name="telefoneCelular" className="crmall__formulario-form_inputs-mid" type="tel" placeholder='( __ ) ____ _____' />
                </div>
                <div>
                  <label>Telefone fixo</label>
                  <input id="telefone" name="telefoneFixo" className="crmall__formulario-form_inputs-mid" type="tel" placeholder='( __ ) ____ _____' />
                </div>
              </div>
              <label>Mensagem</label>
              <textarea required id="mensgem" className="crmall__formulario-form_inputs-full" type="text" placeholder='Digite sua mensagem' />
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

export default Formulario;