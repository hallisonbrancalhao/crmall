import React ,{ useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/Crmall-logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
    <p><a href="#">Home</a></p>
    <p><a href="#">Serviços</a></p>
    <p><a href="#">Sobre nós</a></p>
    <p><a href="#">Contato</a></p>
    </>
  )
  return (
    <div className="crmall__navbar">
      <div className="crmall__navbar-links">
        <div className="crmall__navbar-links_logo">
          <img src={ logo } alt="Logo Crmall" />
          <p>P R O M O</p>
        </div>
        <div className="crmall__navbar-links_container">
          <Menu />
        </div>
        <div className="crmall__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          { toggleMenu && (
            <div className="crmall__navbar-menu_container scale-up-center">
              <div className="crmall__navbar-links_container-links"> 
                <Menu /> 
              </div>
            </div>
          ) }

        </div>
         
      </div>
    </div>
  )
}

export default Navbar