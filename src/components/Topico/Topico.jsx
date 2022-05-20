import React from 'react'
import "./Topico.css"

const Topico = ({ text }) => {
  return (
    <div>
        <h2 className='crmall__topicos-texto'>{text}</h2>
    </div>
  )
}

export default Topico