import React from 'react';
import { View, StyleSheet } from 'react-native';
import FileiraBotoes from './FileiraBotoes';
import BotaoGravar from './BotaoGravar';

const CorpoInstr = (props) => {
    props.tempo.iniciarContagem()
    let sons1 = props.sons.filter((som,index)=> {if (index<4) return som})
    let sons2 =  props.sons.filter((som,index)=> {if (index>=4 & index<8) return som})

    return (
        <View style={[
            styles.container, {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start"
            }
        ]
        }>
            <BotaoGravar 
                tempo={props.tempo}
            />
            <FileiraBotoes
                sons={sons1}
                tempo={props.tempo}
            />
            <FileiraBotoes
                sons={sons2}
                tempo={props.tempo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: 20,
        backgroundColor: "#151515"
    }
})

export default CorpoInstr