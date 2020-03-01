// import React from 'react';
import Fluxo from '../json/fluxovida';

const func = {}

func.qry = el => document.querySelector(el)

func.dado = (x) => Math.floor(Math.random() * x) + 1;

func.rollArr = arr => arr[func.dado(arr.length) - 1]

func.handleChange = (event, $state) => $state(event.target.value)

func.generoIrmao = (gen,irmaos) => gen === 1 ? irmaos.sexo[0] : irmaos.sexo[1]

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

func.$irmaos = (obj,qtd) => {
    const x = []
    for (let i = 0; i < qtd; i++) {
        const irmaos = {
            genero: func.rollArr(obj.sexo),
            idade: obj.idade[func.idadeIrmaos()],
            sentimentos: func.rollArr(obj.sentimentos)
        }
        x.push(irmaos)
    }
    return x
}

func.idadeIrmaos = _ => {
    const r = func.dado(10);
    return r <= 6 ? 1 : r < 10 ? 0 : 2
}

func.section1 = _ => {
    const $oe = Fluxo.origens_e_estilo
    const origemRoll = func.dado($oe.origem_etnica.length) - 1

    return {
        section_nome: $oe.nome,
        roupas: func.rollArr($oe.roupas),
        cabelos: func.rollArr($oe.cabelos),
        detalhes: func.rollArr($oe.detalhes),
        origem: $oe.origem_etnica[origemRoll].origem,
        lingua: func.rollArr($oe.origem_etnica[origemRoll].lingua)
    }
}

func.section2 = _ => {
    const $af = Fluxo.antecedente_familiar
    const $statusPais = (func.dado(10)) < 7
    const statusFam = (func.dado(2)) - 1
    let $qtd = func.dado(10)
    $qtd = $qtd > 7 ? 0 : $qtd

    

    return {
        nome: $af.nome,
        nivel_familiar: func.rollArr($af.nivel_familiar),
        pais: ($statusPais ? $af.pais[0] : $af.pais[1]),
        algo_aconteceu_a_seus_pais: !$statusPais ? func.rollArr($af.algo_aconteceu_a_seus_pais) : false,
        status_familiar: $af.status_familiar[statusFam],
        tragedia_familiar: !statusFam ? func.rollArr($af.tragedia_familiar) : false,
        o_ambiente_de_sua_infancia: func.rollArr($af.o_ambiente_de_sua_infancia),
        irmaos: !!$qtd ? func.$irmaos($af.irmaos,$qtd) : 'Não possuí irmãos. É filho único.'
    }
}

func.section3 = _ => {

} 

func.init = _ => { 
    const obj = JSON.stringify({ 
        section1: func.section1(), 
        section2: func.section2() 
    }) 
    return obj
}

export default func

