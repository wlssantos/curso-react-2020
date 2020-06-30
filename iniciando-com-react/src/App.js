import React from 'react';

class App extends React.Component{
  
  state = {
    nome : ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Selecione Um...", "Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>{comboBoxOpcoes}</select>
    )

  }

  render(){

    const MeuComboBox = () => this.criaComboBox()

    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Bem Vindo(a) {this.state.nome}.</h1>
        <h3>Prop direto do index: {this.props.nome}. Idade: {this.props.idade}</h3>
        <MeuComboBox/>
      </>
    )
  }
}

export default App;