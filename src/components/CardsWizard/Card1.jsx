import * as React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import { useNavigate, history } from "react-router-dom";

import './Cards.css'

const Card1 = () => {
  const navigation = useNavigate();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      peso: 0,
    }
  });

  function onSubmit(data) {
    var pesoAntigo = (JSON.parse(data.peso));
    pesoAntigo = parseInt(pesoAntigo);
  }

  return (
    <form className="crmall__simularCampanha-card1_form" onSubmit={handleSubmit(onSubmit)}>
      <label>1 - Formato</label>
      <div className="crmall__simularCampanhas-card1_form-radios">
        <div>
            <input name="formato" type="radio" value={1} {...register("peso")} /> Sorteio - Número da Sorte
        </div> 
        <div>
            <input name="formato" type="radio" value={2} {...register("peso")} /> Comprou ganhou
        </div> 
        <div>
            <input name="formato" type="radio" value={3} {...register("peso")} /> Prêmio Instantâneo
        </div> 
      </div>
      <input className="crmall__simularCampanha-card1_form-button" type="submit" value="Proximo" />
    </form>
  );
} 

export default Card1