import Adicao from './Adicao';
import React from 'react';



  class soma extends React.Component {
    render() {
      return (
        <h2> <Adicao x={7} e y={23} /> </h2>
      )
      
    }
  }

export default soma;


//Faça uma aplicação React com um componente de classe chamado "Adicao", com as Props "x" 
//e "y" e calcule o resultado dessa operação. Nesse caso, atribua os valores 7 e 23, 
//respectivamente, para as Props "x" e "y" e mostre a seguinte mensagem: 
//O resultado de 7 + 23 = 30
