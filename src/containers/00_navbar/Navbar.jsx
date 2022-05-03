import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/Crmall-logo.svg';

const Navbar = () => {
  return (
    <div className="crmall__navbar">
      <div className="crmall__navbar-links">
        <div className="crmall__navbar-links_logo">
          <img src={ logo } alt="Logo Crmall" />
          <p>P R O M O</p>
        </div>
        <div className="crmall__navbar-links_container">
          <p><a href="#">Home</a></p>
          <p><a href="#">Serviços</a></p>
          <p><a href="#">Sobre nós</a></p>
          <p><a href="#">Contato</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar