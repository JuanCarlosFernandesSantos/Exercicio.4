import React from 'react';

class CompA extends React.Component{
    render() {
        return (
            <h1>{this.props.nom} {this.props.sobrenom}</h1>
        );
    }
}

export default CompA;