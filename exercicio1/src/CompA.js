import React from 'react';

class CompA extends React.Component{
    render() {
        return (
            <h1>{this.props.nome} {this.props.sobrenome}</h1>
        );
    }
}

export default CompA;