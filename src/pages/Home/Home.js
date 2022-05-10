import React from 'react'
import { Banner, SubBanner, Formatos, Canais, Formas, RelatoriosBi, TiposDeNegocios, Cases, Clientes, Formulario } from '../../containers';
import './Home.css'


export default function Home(){
  return (
    <div className="App">
        <div className="banner__bg">
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
    </div>
  )
}