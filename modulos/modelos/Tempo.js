class Tempo {
    constructor(funcaoParaTocarSons, funcaoParaPararSons) {
        this.tempoDoCompasso = 1
        this.funcoesParaDispararTocar = []
        this.funcoesParaDispararParar = []
        this.sonsParaTocarLista = []
        this.funcaoParaTocarSons = funcaoParaTocarSons
        this.funcaoParaPararSons = funcaoParaPararSons
        this.tocando = false
        this.gravacao = []
        this.gravarAtivado = false
    }

    //adicionar instrumentos na lista
    cadastrarInstrumento(instrumento) {
        this.sonsParaTocarLista.push(instrumento)
    }

    descadastrarInstrumento(instrumento) {
        this.sonsParaTocarLista = this.sonsParaTocarLista.filter((InstrumentoNaLista) => {
            if (instrumento != InstrumentoNaLista) {
                return InstrumentoNaLista
            }
        })
    }

    //Sons
    tocarInstrumentos = () => {
        this.sonsParaTocarLista.forEach(som => {
            this.funcaoParaTocarSons(som)
        })
    }

    pararInstrumentos = () => {
        this.sonsParaTocarLista.forEach(som => {
            this.funcaoParaPararSons(som)
        })
    }

    //Funcoes para parar
    cadastrarFuncoesTempoUmParar = (funcao) => {
        this.funcoesParaDispararParar.push(funcao)
    }

    dispararFuncoesParar = () => {
        this.funcoesParaDispararParar.forEach(funcao => {
            funcao()
        });
        this.funcoesParaDispararParar = []
    }


    //Funcoes para Tocar
    cadastrarFuncoesTempoUmTocar = (funcao) => {
        this.funcoesParaDispararTocar.push(funcao)
    }

    dispararFuncoesTocar = () => {
        this.funcoesParaDispararTocar.forEach(funcao => {
            funcao()
        });
        this.funcoesParaDispararTocar = []
    }


    //Função chamada no tempo 1
    dispararTempoUm = () => {
        this.dispararFuncoesTocar()
        this.dispararFuncoesParar()
    }

    conferirSeTemInstrumentos() {
        if (this.sonsParaTocarLista.length == 0) {
            this.pararDeContar()
        }
    }

    gravar() {
        this.gravacao.push(this.sonsParaTocarLista.slice())
    }


    trocarGravarAtivado() {
        this.gravarAtivado = !this.gravarAtivado
        this.pararDeContar()
    }

    //Compasso
    iniciarContagem = () => {
        this.tocando = true
        this.tocandoCompasso = setInterval(() => {
            if (this.tempoDoCompasso < 4) {
                this.tempoDoCompasso++
            } else {
                if (this.gravarAtivado) {
                    this.gravar()
                }
                this.pararInstrumentos()
                this.tocarInstrumentos()
                this.tempoDoCompasso = 1
                this.dispararTempoUm()
                this.conferirSeTemInstrumentos()
                console.log(this.gravacao)
            }
        }, 1000)
    }

    pararDeContar = () => {
        console.log('parou')
        clearInterval(this.tocandoCompasso)
        this.tocando = false
    }
}

export default Tempo;