import React from 'react'
import { Feature } from '../index'
import './Features.css'


const featuresData = [
    {
        title: 'Indústrias'
    },
    {
        title: 'Imobiliárias'
    },
    {
        title: 'Farmácias'
    },
    {
        title: 'CDLs'
    },
    {
        title: 'Supermercados'
    },
    {
        title: 'Postos'
    },
    {
        title: 'Auto-Peças'
    },
    {
        title: 'Etc.'
    },

]

const Features = () => {
  return (
    <div className='crmall__features-container'>
        {featuresData.map((item, index) => (
            <Feature title={item.title} index={item.title + index}/>
        ))}
    </div>
  )
}

export default Features