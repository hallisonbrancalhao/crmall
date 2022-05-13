import React from 'react'
import './App.css'
import { Routes , Route , Link} from 'react-router-dom';

import Home from "./pages/Home/Home"
import Servicos from "./pages/Servicos/Servicos"
import Sobre from "./pages/Sobre/Sobre"
import Navbar from './containers/00_navbar/Navbar';
import { Footer } from './containers';
import SimularCampanhas from './pages/SimularCampanhas/SimularCampanhas'
import { Card2, Card3 } from './components';


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
                <Route path='/simular-campanhas' element={<SimularCampanhas />} />
                <Route path="/simular-campanhas/Card2" element={<Card2 />}/>
                <Route path="/simular-campanhas/Card3" element={ <Card3 /> }/>
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  );
}

export default App;