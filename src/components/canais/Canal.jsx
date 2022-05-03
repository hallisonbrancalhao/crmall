import React from 'react'
import './canal.css'

const Canal = (Link, titulo, descricao) => {
  return (
    <div>
      <img href={ Link }></img>
      <h2>{ titulo }</h2>
      <p>{ descricao }</p>
      
    </div>
  )
}

export default Canal