import React from 'react'
import "./Numeros.css"

const Numeros = ({ n }) => {
  return (
    <div>
        <h2 className='crmall__numerosTopicos'>{n}</h2>
    </div>
  )
}

export default Numeros