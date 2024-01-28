import React from "react";
/* _//item 2.6 realizado */
export default class Agendamento extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        date: ''
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
      user: {
        ...prevState.user,
        [name]: value
      }
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
          mensagem: "Agendamento enviado com sucesso!"
        },
        user: {
          name: '',
          email: '',
          date: ''
        }
      });
    } else {
      this.setState({
        status: {
          type: 'error',
          mensagem: "Erro: Usuário não cadastrado com sucesso!"
        }
      });
    }
  }
  /* _//item 1.6 realizado */
  validate() {
  const { user } = this.state;
  /* _//item 1.5 realizado */
  if (!user.name) {
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
  if (!user.date) {
    this.setState({
      status: {
        type: 'error',
        mensagem: 'Erro: Necessário preencher o campo data!'
      }
    });
    return false;
  }
  
  return true;
}
 
  render() {
       /* _//item 2.4 realizado */
       /* _//item 1.10 realizado */
       /* _//item 1.13 realizado */
    const { user, status } = this.state;
    return (
      <>
        <div id="viewAgendamentos"></div>
        <div className="agendamentos_header">
          <h1>Agende seu Horário </h1>
        </div> 
        <div className="agendamentos_main">
          <div className="agendamentos_main_div">
            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

            <form onSubmit={this.addUser}>
              <label>Nome*: </label>
              <input type="text" name="name" placeholder="Nome completo do usuário" onChange={this.valueInput} value={user.name} /><br /><br />

              <label>E-mail*: </label>
              <input type="email" name="email" placeholder="Melhor e-mail do usuário" onChange={this.valueInput}  value={user.email} /><br /><br />

              <label> Data*: </label>
              <input type="date" name="date" onChange={this.valueInput} value={user.date} />
             <br/> <br/>

           
              <button type="submit"> Agendar </button>
            </form>
          </div>  
        </div>
      </>
    );
  }
}
