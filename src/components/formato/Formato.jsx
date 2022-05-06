import React from 'react'
import './formato.css'

const Formato = ({icon, title, text }) => {
  return (
    <div className="crmall__formato transition-menor">
      <img src={icon} alt="" />
      <h2>{title}</h2>
      <p>{ text }</p>
      <button>Mais detalhes</button>
    </div>
  )
}

export default Formato