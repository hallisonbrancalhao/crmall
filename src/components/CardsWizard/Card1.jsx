import * as React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import { useNavigate, history } from "react-router-dom";
import Topico from "../Topico/Topico";
import Numeros from "../numeros/Numeros";


import './Cards.css'

const Card1 = () => {

    function onSubmit(data) {
      data.preventDefault()
      var pesoAntigo = (JSON.parseInt(data.value))
      pesoAntigo = parseInt(pesoAntigo)
    }
  
    return (
      <form className="crmall__simularCampanha-card1_form" onSubmit={onSubmit}>
        <label className="crmall__simularCampanha-card1-titulo_label">  <Numeros n={"1"}/> <Topico text={"Formato"} /> </label>
        <div className="crmall__simularCampanhas-card1_form-radios">
          <div className="crmall__simularCampanhas-card_form-inputs">
              <input className="crmall__radio" name="formato" type="radio" value={1} /> Sorteio - Número da Sorte
          </div> 
          <div className="crmall__simularCampanhas-card_form-inputs">
              <input className="crmall__radio" name="formato" type="radio" value={2} /> Comprou ganhou
          </div> 
          <div className="crmall__simularCampanhas-card_form-inputs">
              <input className="crmall__radio" name="formato" type="radio" value={3}/> Prêmio Instantâneo
          </div> 
        </div>
        <input className="crmall__simularCampanha-card1_form-button" type="submit" value="Proximo" />
        <input className="crmall__simularCampanha-card1_form-button-anterior" type="submit" value="Anterior" />
      </form>
  );
} 

export default Card1