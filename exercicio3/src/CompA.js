import React from 'react';

class CompA extends React.Component{
    render() {
        return (
            <h1>Nome: {this.props.nome}</h1>
        );
    }
}

export default CompA;