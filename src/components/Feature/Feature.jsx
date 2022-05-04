import React from 'react'
import './Feature.css'
import icon from '../../assets/Elips.svg'

const Feature = ({ title }) => {
  return (
    <div className='crmall__feature-container'>
        <img src={icon} alt="" />
        <h2> {title} </h2>
    </div>
  )
}

export default Feature