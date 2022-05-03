import React from 'react'
import './Relatorios.css'
import icon from '../../assets/icon-bi.svg'

const Relatorios = () => {
  return (
    <div className="crmall__relatorios section__margin">
      <div className="crmall__relatorios-container">
        <div className="crmall__relatorios-container_textos">
          <div className="crmall__relatorios-titulo">
          <p className="crmall__relatorios-titulo_numero">4</p>
          <p className="crmall__relatorios-titulo_texto">Contemple resultados através de gráficos e relatórios do Power BI</p>
          </div>
          <div className="crmall__relatorios-descricao">
            <p>A ferramenta mais completa da atualidade, o Power BI é complemento de nossos serviços, garantindo o acompanhamento das campanhas, bem como o fornecimento de insights valiosos para ações de marketing.</p>
            <button>Mais detalhes</button>
          </div>
        </div>
        <div className="crmall__relatorios-container_icon">
          <img src={icon} alt="Icone powerBi" />
        </div>
      </div>
    </div>
  )
}

export default Relatorios