import React,{useState} from 'react';
import Fluxo from '../json/fluxovida';

const func = {}


func.qry = el => document.querySelector(el)

func.dado = (x) => Math.floor(Math.random() * x) + 1;

func.rollArr = arr => arr[func.dado(arr.length) - 1]

func.handleChange = (event, $state) => $state(event.target.value)

func.$irmaos = (obj,qtd) => {
    const x = []
    for (let i = 0; i < qtd; i++) {
        const irmaos = {
            nome: "nome generico",
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

func.idade = _ => 16 + func.dado(6) + func.dado(6)

func.defineEvento = eventos => {
    const roll = func.dado(10); 
    return roll < 4 ? 0 : roll < 7 ? 1 : roll < 9 ? 2 : 3
}

func.filtraResp = string => {
    
    let st = string;

    if (string.indexOf('{1D10x100}') !== -1) st = string.replace('{1D10x100}', func.dado(10) * 1000)

    if (string.indexOf('{1D10}') !== -1) st = string.replace('{1D10}', func.dado(10))

    console.log(st)
    
    return st

}

func.gep = ev => {

    const bol = func.dado(2) - 1;

    return {
        nome: ev.nome,
        aconteceu_um_desastre: !!bol && func.filtraResp(func.rollArr(ev.aconteceu_um_desastre)),
        o_que_vai_fazer_a_respeito: !!bol && func.rollArr(ev.o_que_vai_fazer_a_respeito),
        voce_se_deu_bem: !bol && func.filtraResp(func.rollArr(ev.voce_se_deu_bem))
    }
    
}


func.section1 = ($idade) => {
    const $oe = Fluxo.origens_e_estilo
    const origemRoll = func.dado($oe.origem_etnica.length) - 1
    
    return {
        section_nome: $oe.nome,
        idade: $idade,
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
    const $mt = Fluxo.motivacoes

    return {
        nome: $mt.nome,
        caracteristicas_de_sua_personalidade: func.rollArr($mt.caracteristicas_de_sua_personalidade),
        pessoa_que_mais_valoriza: func.rollArr($mt.pessoa_que_mais_valoriza),
        o_que_mais_valoriza: func.rollArr($mt.o_que_mais_valoriza),
        qual_a_sua_opiniao_em_relacao_as_pessoas: func.rollArr($mt.qual_a_sua_opiniao_em_relacao_as_pessoas),
        seu_objeto_mais_estimado: func.rollArr($mt.seu_objeto_mais_estimado)
    }
} 

func.section4 = $idade => {
    const anos = $idade - 16;
    const $ev = Fluxo.eventos_da_vida;
    
    const evento_deste_ano = _ => {
        const roll = func.dado(10)
        return roll < 4 ? func.gep($ev.eventos.grandes_problemas_exitos) : roll < 7 ? 'Amigos & Inimigos' : roll < 9 ? 'Envolvimento romantico' : 'Nada aconteceu este ano.'
    }

    return {
        nome: $ev.nome,
        evento_do_ano: evento_deste_ano()
    }

    
} 

func.init = idade => {
    const obj = JSON.stringify({ 
        section1: func.section1(idade), 
        section2: func.section2(),
        section3: func.section3(),
        section4: func.section4(idade),
    }) 
    return obj
}

export default func

