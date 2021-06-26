import React from 'react';
import { View } from 'react-native';
import BotaoSom from './BotaoSom';

const FileiraBotoes = (props) =>{

    return (


        <View style={[
            {
                width:"100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent:"space-around",
                paddingBottom:10
            }
        ]}
        >
            {props.sons.map((nomeInstrumento, index) => {
                return <BotaoSom tempo={props.tempo} key={index} instrumento={nomeInstrumento}/>
            })}

        </View>
    )
}


export default FileiraBotoes