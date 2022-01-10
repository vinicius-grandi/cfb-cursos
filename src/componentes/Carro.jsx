import React from 'react'

class Carro extends React.Component {
    constructor() {
        super()
        this.modelo='Golf'
        this.state = {
            ligado: false,
            velAtual: 0,
        }
        
    }

    ligar() {
        this.setState(state => ({
            ligado:!state.ligado,
            velAtual: 0
        }))
    }

    acelerar() {
        if (!this.state.ligado) return alert("O carro está desligado!")
        this.setState((state, props) => ({
            velAtual: state.velAtual + props.fator
        }))
    }

    render() {
        return (
            <>
                <h1>Meu carro</h1>
                <p>{this.modelo}</p>
                <p>O carro está {(this.state.ligado?"Ligado":"Desligado")} e sua velocidade é {this.state.velAtual}</p>
                <button onClick={() => this.ligar()}>Ligar/Desligar</button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
            </>
        )
    }
}

export default Carro