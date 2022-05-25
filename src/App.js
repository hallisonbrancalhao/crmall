import React from 'react'
import './App.css'
import { Routes , Route} from 'react-router-dom';

import Home from "./pages/Home/Home"
import Servicos from "./pages/Servicos/Servicos"
import Sobre from "./pages/Sobre/Sobre"
import Navbar from './containers/00_navbar/Navbar';
import { Footer } from './containers';
import SimularCampanhas from './pages/SimularCampanhas/SimularCampanhas'


function App() {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <main>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/servicos' element={<Servicos/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route exact path='/simular-campanhas' element={<SimularCampanhas />} />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  );
}

export default App;