import React, { Component } from 'react'
import './conversor.css'

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        this.converter = this.converter.bind(this)
    }

    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=cc5d19b6304453cb10e2`

        fetch(url).then(res => {
            return res.json()
        })
            .then(json => {
                let cotacao = json[de_para];
                let moedaB_valor = (this.state.moedaA_valor * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
            })

    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input class="form-itens" type="text" placeholder="0,00" onChange={(e) => { this.setState({ moedaA_valor: e.target.value }) }}></input>
                <button value="Converter" onClick={this.converter}>Converter</button>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}
