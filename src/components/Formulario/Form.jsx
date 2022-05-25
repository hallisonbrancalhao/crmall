import * as React from "react";
import Topico from "../Topico/Topico";
import Numeros from "../numeros/Numeros";
import './Form.css'

const Card1 = () => {

  var currentCard = 0;
  showTab(currentCard);

  function showTab(n) {
    var x = document.getElementsByClassName("crmall__simularCampanha-step");
    x[n].style.display = "block";

    if(n === 0) {
      document.getElementsByClassName("prev").style.display = "none" //Esconder botao anterior no primeiro passo
    } else {
      document.getElementsByClassName("prev").style.display = "inline"
    }
  }
  
    return (
      <form className="crmall__simularCampanha-card1_form" action="./calcular.php">
        <div className="crmall__simularCampanha-step">
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
          <input className="crmall__simularCampanha-card1_form-button next" type="submit" value="Proximo" />
          <input className="crmall__simularCampanha-card1_form-button prev" type="submit" value="Anterior" />
        </div>

        <div className="crmall__simularCampanha-steps">
          <span className="step"></span>
          <span className="step active"></span>
          <span className="step"></span>
          <span className="step"></span>
        </div>
      </form>
  );
} 

export default Card1