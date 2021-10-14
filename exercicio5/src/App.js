import Vacina from './Vacina';
import React from 'react';



  class App extends React.Component {
    render() {
      return (
        <h2> <Vacina  nome = "Coronavac" /> </h2>
      )
      
    }
  }

export default App;

// Faça uma aplicação React com um componente de classe chamado "Vacina", com a Props
//"nome". Nesse caso, defina o valor "Coronavac" para a Props "nome" e mostre a seguinte 
//mensagem: 
//Coronavac é uma das vacinas contra a Covid-19.