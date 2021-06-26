import React, { useState } from 'react';
import { Button } from 'react-native';

const BotaoGravar = (props) => {
    const [cor, setCor] = useState({apertado:false,cor:'#2196F3'})

    const botaoApertado=()=>{
        props.tempo.trocarGravarAtivado()
        if (cor.apertado){
            setCor({apertado:false,cor:'#2196F3'})
        }else{
            setCor({apertado:true,cor:'red'})
        }
    }

    return (
        <Button
            title='gravar'
            onPress={()=>{botaoApertado()}}
            color={cor.cor}
        />
    )
}

export default BotaoGravar