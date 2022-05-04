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
      <div className="crmall__relatorios-subcontainer">
          <div className="crmall__relatorios-subcontainer-esq">
            <h2>Encontrou o que procura?</h2>
            <p>Comece agora mesmo a orçar a sua campanha. Identifique os recursos de sua escolha para darmos início às negociações.</p>
            <button>Simular campanha</button>
          </div>
          <div className="crmall__relatorios-subcontainer-dir">
            <h2>Que tal criar uma campanha inovadora? </h2>
            <p>Se você tem uma ideia original, ou busca um caminho diferente para o formato da sua promoção, bora bater um papo com a gente.</p>
            <button>Entrar em contato</button>
          </div>
        </div>
    </div>
  )
}

export default Relatorios