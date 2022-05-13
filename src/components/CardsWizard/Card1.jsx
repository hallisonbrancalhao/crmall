import * as React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ReactDOM from "react-dom"
import { useStateMachine } from "little-state-machine";
import Card2 from "./Card2";

import './Cards.css'

const Card1 = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      peso: 0,
    }
  });

  const onSubmit = (data) => {
    var pesoAntigo = (JSON.stringify(data.peso));
    navigate("/simular-campanhas/Card2", {pesoAntigo})
  };

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