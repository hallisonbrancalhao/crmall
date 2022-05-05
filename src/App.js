import React from 'react'
import './App.css'
import { Routes , Route , Link} from 'react-router-dom';

import Home from "./pages/Home/Home"
import Contato from "./pages/Contato/Contato"
import Servicos from "./pages/Servicos/Servicos"
import Sobre from "./pages/Sobre/Sobre"
import Navbar from './containers/00_navbar/Navbar';


function App() {
  return (
    <>
        <header>
          
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contato' element={<Contato/>} />
                <Route path='/servicos' element={<Servicos/>} />
                <Route path='/sobre' element={<Sobre/>} />
            </Routes>
        </main>
    </>
  );
}

export default App;