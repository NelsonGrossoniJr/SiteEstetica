import React, { Component } from 'react';
/* _//item 2.6 realizado */
export default class Tratamentos extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: ""
    }
  }

  /* _//item 1.8 realizado */
  /* _//item 1.9 realizado*/
  /* _//item 1.7 realizado */
  componentDidMount = async () => {
      await fetch("src/data.json")
      .then(response => response.json())
      .then(data => {
        this.setState({data: data[0]})
      });  
  }
 
  render(){
  /* _//item 1.10 realizado*/
  /* _//item 2.4 realizado */
  /* _//item 1.13 realizado */
    return(
      <>
        <div id= "tratamentos_container">
          <div className= "tratamentos_header">
            
            <h1>Conheça nossos Tratamentos</h1>
            <p>Escolher o melhor plano de tratamento em estética é o segredo para você ter os melhores resultados!</p>
            <p>Levamos em consideração seu orçamento, sua disponibilidade de tempo e fisiologia. Veja abaixo nosso menu completo de tratamentos. Sabemos que nao são muitas opções, mas não se preocupe pois em breve teremos novidades.</p>
          </div>
        
          <div className= "tratamentos_main">
            <div className='tratamentos_main_div-tarefa'>
              <img src={this.state.data.imagem}/> 
              <div>
                <h1>{this.state.data.nomeDoTratamento}</h1>
                <div className="tratamentos_main_div_div-P">
                  <h3>Descrição:</h3>
                   <p>{this.state.data.descricao}</p>
                  <h3>Contraindicações:</h3>
                  <p>{this.state.data.contraindicacoes}</p>
                  <h3>{this.state.data.valor}</h3>
                </div>
               
                
              </div>
            </div>
            <div className='tratamentos_main_div-tarefa'>
              <div>
                <h1>{this.state.data.nomeDoTratamento1}</h1>
                <div className="tratamentos_main_div_div-P">
                  <h3>Descrição:</h3>
                   <p> {this.state.data.descricao1}</p>
                  <h3>Contraindicações:</h3>
                  <p>{this.state.data.contraindicacoes1}</p>
                  <h3>{this.state.data.valor1}</h3>
                </div>
              </div>
              <img src={this.state.data.imagem1}/> 
            </div>
            
          </div> 
        </div>
            
      </>
    );
  }
}