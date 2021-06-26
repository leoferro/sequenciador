import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

const BotaoSom = (props) => {

    const [ligado, setLigado] = useState({ ligado: false, cor: '#2196F3' })

    //Som

    //Fim som

    const mudarCorAmarelo = () => {
        setLigado({ ligado: true, cor: "#fbec5d" })
    }

    const mudaCorAzul = () => {
        setLigado({ ligado: false, cor: "#2196F3" })
    }

    const mudarBotao = () => {
        if (!props.tempo.tocando){props.tempo.iniciarContagem()}
        if (ligado.ligado) {
            props.tempo.descadastrarInstrumento(props.instrumento)
            setLigado({ ligado: false, cor: "#dd5035" })
            props.tempo.cadastrarFuncoesTempoUmParar(mudaCorAzul.bind(this))
        }
        else {
            props.tempo.cadastrarInstrumento(props.instrumento)
            setLigado({ ligado: true, cor: "#dd5035" })
            props.tempo.cadastrarFuncoesTempoUmTocar(mudarCorAmarelo.bind(this))
        }
    }

    return (
        <Button
            title="      "
            onPress={() => { mudarBotao() }}
            color={ligado.cor}
        />
    )
}

export default BotaoSom