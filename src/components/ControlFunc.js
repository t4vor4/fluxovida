// import React from 'react';

const func = {}

func.dado = (x) => Math.floor(Math.random() * x) + 1;

func.rollArr = arr => arr[func.dado(arr.length) - 1]

func.handleChange = (event, $state) => $state(event.target.value)

func.generoIrmao = (gen,irmaos) => gen === 1 ? irmaos.sexo[0] : irmaos.sexo[1]

func.idadeIrmao = (idade,irmaos) => idade <= 5 ? irmaos.idade[1] : idade <= 9 ? irmaos.idade[0] : irmaos.idade[2]

func.sentimentosIrmaos = (sent,irmaos) => irmaos.sentimentos[(sent - 1)]

func.irmaosFunc = (resultado, irmaos) => {
    const geraIrmao = (i = 0) => {
        return {
            nome: 'Irmao' + i,
            genero: func.generoIrmao(func.dado(2),irmaos),
            idade: func.idadeIrmao(func.dado(10),irmaos),
            sentimentos: func.sentimentosIrmaos(func.dado(5),irmaos)
        }
    }

    const temIrmaos = (res) => {
        res = res > 7 ? 0 : res

        const irmaos = []

        for (let i = 0; i < res; i++) {
            irmaos.push(geraIrmao(i))
        }

        return irmaos
    }


    return temIrmaos(resultado)
}

export default func
