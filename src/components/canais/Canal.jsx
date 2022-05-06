import React from 'react'
import './canal.css'

const Canal = ({img, title, text}) => {
  return (
    <div className="crmall__canal transition-menor">
      <img src= { img } alt="Titulo" />
      <h2>{ title }</h2>
      <p>{ text }</p>
      <button>Mais detalhes</button>
    </div>
  )
}

export default Canal;