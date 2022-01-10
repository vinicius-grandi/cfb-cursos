import React from 'react'

class Classe extends React.Component {

    render() {
        return (
            <p>Olhe só, eu vim de uma classe! Prazer, sou {this.props.nome}</p>
        )
    }
}

export default Classe