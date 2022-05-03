import React from 'react'
import { NavBar, Banner, SubBanner, Formatos, Canais, Formas, RelatoriosBi, TiposDeNegocios, Cases, Clientes, Footer, Formulario } from './containers';
import { Canal, Formato } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="banner__bg">
        <NavBar />
        <Banner />
      </div>
      <SubBanner />
      <Formatos />
      <Canais />
      <Formas />
      <RelatoriosBi />
      <TiposDeNegocios />
      <Cases />
      <Clientes />
      <Formulario />
      <Footer />
    </div>
  )
}

export default App