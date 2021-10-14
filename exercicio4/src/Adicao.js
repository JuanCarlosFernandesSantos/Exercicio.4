import React from 'react';

class Adicao extends React.Component{
    render() {
        return (
            <h1>A soma de  {this.props.x}  e  {this.props.y} deu o seguinte resultado = {this.props.x + this.props.y}</h1>
        );
    }
}

export default Adicao;