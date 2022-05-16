import React from 'react'
import { SimuleSuaCampanhaBanner } from '../../containers'
import Wizard from './Wizard/Wizard'

const SimularCampanhas = () => {
  return (
    <div >
      <div className="crmall__simularcampanhas-banner">
        <SimuleSuaCampanhaBanner />
      </div>
      <div className="crmall__simularcampanhas-form section__margin">
        <Wizard /> 
      </div>
    </div>
  )
}

export default SimularCampanhas