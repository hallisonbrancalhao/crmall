import React ,{ useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BrowserRouter as Route , Routes , Router, Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Crmall-logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <Link to="/">Home</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/sobre">Sobre nós</Link>
      <Link to="/servicos">Serviços</Link>
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