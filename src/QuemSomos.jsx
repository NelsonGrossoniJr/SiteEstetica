import React, { Component } from 'react';
import imagem from './imagens/imagemDoutora.png';
/* _//item 2.6 realizado */
export default class QuemSomos extends Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
  /* _//item 2.4 realizado */
  /* _//item 1.10 realizado */
  /* _//item 1.12 realizado */
  /* _//item 1.13 realizado */

    /* _//item 1.3 realizado */
    /* _//item 1.2 realizado */
    var objDados = {
      titulo: "Somos",
      texto: "Quando você visita uma clínica de estética, qual é a garantia de que você terá o melhor tratamento estético? Preocupados com isso idealizamos a Espaço VWK! Aqui pesquisamos e testamos exaustivamente os tratamentos mais avançados que surgem. Somente aqueles que tem resultados comprovados e que alcançam os padrões de qualidade e segurança mais elevados são adicionados ao nosso menu. Isso é o que significa “estética avançada”: todo protocolo que você fizer conosco é supervisionado por uma médica ganhadora do Prêmio O Globo. Depois de adquirir uma experiência profissional em 12 países, incluindo Estados Unidos e França, Dra. Vitoria Watkins Kappaun idealizou a Espaço VWK. Uma clínica com um atendimento de nível internacional em que você sente (na pele) uma equipe altamente treinada e dedicada a oferecer a você a melhor experiência."
    }
    
    /* _//item 1.3 realizado */
    const arrayEspecialista = ["Membro da ONG francesa Médecins Sans Frontières",
                        "Médica credenciado do Hospital Copa D´Or",
                        "Pós-Graduação na Escola Paulista de Medicina (UNIFESP) – Serviço de Cirurgia Plástica (2007 a 2008)",
                        "Estágio de Reconstrução Mamária do Hospital Pérola Byngton – SP",
                        "Ex-oficial médica militar da Força Aérea Brasileira",
                        "Membro da Sociedade Brasileira de Cirurgia Plástica",
                        "Graduação em Medicina pela Universidade Federal do Paraná",
                        "Residência em Cirurgia Geral reconhecida pelo MEC e pelo Colégio Brasileiro de Cirurgiões",
                        "Residência em Cirurgia Plástica reconhecida pelo MEC e pela Sociedade Brasileira de Cirurgia Plástica"
                  
                       ];
    
    /* _//item 1.5 realizado */
    /* _//item 1.2 realizado */
    /* _//item 1.4 realizado */
   let listaDeItens = arrayEspecialista.map((item, index) => <li key={index}>{item}</li>);
  
    return(
      <>
        <div id="container">
          <div id= "substituindoHeader"></div>
          <header>
              <a href='#viewQuemSomos'>Quem Somos</a>
              <a href='#tratamentos_container'>Tratamentos</a>
              <a href='#viewFaleConosco'>Fale Conosco</a>
              <a href='#viewAgendamentos'>Agendamento</a>
              <a href='#viewAgendamentos'>Trabalhe Conosco</a>
          </header>
          
          <main-header id="viewQuemSomos">
            <div>
              <h1>Espaço VWK</h1>
              <h3>Centro de Estética</h3>             
            </div>
          </main-header>
          
          <main>
            <div className='main_div_quemSomos'>
              
              <h1>{`Quem ${objDados.titulo}`}</h1>
              <p>{objDados.texto}</p>
            </div>
            <div className='main_div_nossaEspecialista'>
              <h1>Nossa Especialista</h1>
              <h3>Vitoria Watkins Kappaun</h3>
              <div className='main_div_nossaEspecialista_div'>
                <ul>
                  {listaDeItens}
                </ul>
                <img id='hideImgDoutora' src={imagem} alt='imagemDoutora'/>
                
                
              </div>
              
  
              
            </div>
          </main>       
        </div>
      
      </>
    )
  }
}