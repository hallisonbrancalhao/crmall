import React from 'react'
import { NavBar, Banner, SubBanner, Formatos, Canais, Formas, RelatoriosBi, TiposDeNegocios, Cases, Clientes, Footer, Formulario } from '../../containers';
import './Home.css'


export default function Home(){
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