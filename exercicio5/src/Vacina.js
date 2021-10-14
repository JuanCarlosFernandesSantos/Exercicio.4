import React from 'react';

class Vacina extends React.Component{
    render() {
        return (
            <h1>{this.props.nome} é uma das vacinas contra a Covid-19.</h1>
        );
    }
}

export default Vacina;