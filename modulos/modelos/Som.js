import { Sound } from 'expo-av/build/Audio';

//preciso resolver a questão do request que não carrega dinamicamente

class Som {
    constructor() {
        this.sons = {
            'caixa': [new Sound(), require("../../assets/audio/caixa.wav")],
            'agogo': [new Sound(), require("../../assets/audio/agogo.wav")],
            'cordas': [new Sound(), require("../../assets/audio/cordas.wav")],
            'piano': [new Sound(), require("../../assets/audio/piano.wav")],
            'bumbo': [new Sound(), require("../../assets/audio/bumbo.wav")],
            'synt': [new Sound(), require("../../assets/audio/synt.wav")],
            'pianoArpejo': [new Sound(), require("../../assets/audio/pianoArpejo.wav")],
            'flauta': [new Sound(), require("../../assets/audio/flauta.wav")]

        }

        Object.keys(this.sons).forEach((somSeparado) => {
            //depois do require {, isLooping: true }
            this.sons[somSeparado][0].loadAsync(this.sons[somSeparado][1])
        });
    }

    tocarSom = (instrumento) => {
        this.sons[instrumento][0].playAsync()
    }

    pararSom = (instrumento) => {
        this.sons[instrumento][0].stopAsync()
    }
}

export default Som