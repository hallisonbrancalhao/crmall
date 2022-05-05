import React from 'react'
import './Footer.css'
import iconPhone from '../../assets/iconPhone.png'
import iconMail from '../../assets/iconMail.png'

const Footer = () => {
  return (
    <div className="crmall__footer-bg ">
      <div className="crmall__footer section__margin">
        <div className="crmall__footer-links">
          <>
            <p><a href="#" className="crmall__footer-links_item">Home</a></p>
            <p><a href="#" className="crmall__footer-links_item">Sobre nós</a></p>
            <p><a href="#" className="crmall__footer-links_item">Serviços</a></p>
            <p><a href="#" className="crmall__footer-links_item">Contato</a></p>
          </>
        </div>
    	  <div className="crmall__footer-dados">
          <div className="crmall__footer-dados_phone">
            <img src={iconPhone} alt="" />
            <p>11 4063 6542</p>
          </div>
          <div className="crmall__footer-dados_email">
            <img src={iconMail} alt="" />
            <p>contato@crmall.com</p>
          </div>
          <div className="crmall__footer-dados_endereco">
            <p>Rua Albuquerque Linz, 635, Edifício Vancouver, Sala 1206 Santa Cecília, São Paulo - SP</p> 
          </div>
          <div className="crmall__footer-dados_horario">
            <p>(Horário de atendimento das 09h às 18h)</p> 
          </div>
        </div>
      </div>
      <div className="crmall__subfooter">
        <p>CRMALL  -  Todos os direitos reservados - 2020</p>
      </div>
    </div>
  )
}

export default Footer