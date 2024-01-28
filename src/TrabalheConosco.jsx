import React from "react";
/* _//item 2.6 realizado */
class FaleConosco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        textArea: ''
      },
      status: {
        type: '',
        mensagem: ''
      }
    };
  }

  // Receber os dados do formulário
  /* _//item 1.7 realizado */
  valueInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ 
      user: {...prevState.user, [name]: value}
    }));
  }

  // Enviar os dados para o back-end
  addUser = async e => {
    e.preventDefault();

    /* _//item 1.5 realizado */
    if(!this.validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      this.setState({
        status: {
          type: 'success',
          mensagem: "Formulário enviado com sucesso!"
        },
        user: {
          name: '',
          email: '',
          textArea: ''
        }
      });
    } else {
      this.setState({
        status: {
          type: 'error',
          mensagem: "Erro: Usuário não cadastrado !"
        }
      });
    }
  }
  /* _//item 1.6 realizado */
  validate() {
  /* _//item 1.2 realizado */  
  const { user } = this.state;
  /* _//item 1.5 realizado */
  if (!user.name) {/* Se o campo nao for preenchido, retorna erro */
    this.setState({
      status: {
        type: 'error',
        mensagem: 'Erro: Necessário preencher o campo nome!'
      }
    });
    return false;
  }
  if (!user.email) {
    this.setState({
      status: {
        type: 'error',
        mensagem: 'Erro: Necessário preencher o campo e-mail!'
      }
    });
    return false;
  }
  if (!user.textArea) {
    this.setState({
      status: {
        type: 'error',
        mensagem: 'Erro: Necessário preencher o campo texto!'
      }
    });
    return false;
  }
  
  return true;
}
  /* _//item 2.4 realizado */
  /* _//item 1.10 realizado */
  /* _//item 1.13 realizado */
  render() {
    /* _//item 1.2 realizado */
    const { user, status } = this.state;
    return (
      <>
        <div id="viewTrabalheConosco"></div>
      <div className="trabalheConosco_header">
        <h1>Trabalhe Conosco</h1>
      </div>
      <div className="trabalheConosco_main">
        <div className="trabalheConosco_main_div"> 
          <div className="trabalheConosco_main_div_div_resultado">
            {status.type === 'success' ? <p style={{ color: "green", display: "inline"}}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <span style={{ color: "#ff0000", display: "inline" }}>{status.mensagem}</span> : ""}
          </div>
          
          <form onSubmit={this.addUser}>

              <label>Nome*:</label>
              <input type="text" name="name" placeholder="Nome completo do usuário" onChange={this.valueInput} value={user.name}/*esta recebendo o valor atualizado atraves do valueInput que atualiza o estado do valor de cada input */ /><br /><br />

              <label>E-mail*: </label>
              <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={this.valueInput}  value={user.email} /><br /><br />

              <label>Texto*: </label>
              <textarea placeholder= "Digite seu texto" name= "textArea" onChange={this.valueInput} value={user.textArea}/>
            <br/><br/>

            <button type="submit">Falar conosco</button>
          </form>
        </div>    
      </div>
      </>
    );
  }
}

export default FaleConosco;