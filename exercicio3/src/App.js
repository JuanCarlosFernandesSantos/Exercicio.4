import CompA from './CompA';
import React from 'react';



  class App extends React.Component {
    render() {
      return (
        <h2><CompA nome ="Lucas" /> <CompA nome ="Carla" /><CompA nome ="Pedro" /><CompA nome ="Beatriz" /></h2>
      )
      
    }
  }

export default App;

// Faça uma aplicação React com dois componentes de função chamados "CompA", com a Props
//"nome", e "App". O "CompA" deve ser reutilizado 4x no "App". Nesse caso, atribua os 
//seguintes valores: "Lucas", "Carla", "Pedro", "Beatriz", respectivamente, para a Props "nome" 
//do "CompA" e mostre as seguintes mensagens:
//Nome: Lucas
//Nome: Carla
//Nome: Pedro
//Nome: Beatriz