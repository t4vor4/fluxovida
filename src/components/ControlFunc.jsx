import React,{useState} from 'react';
import Fluxo from '../json/fluxovida';

const func = {}


func.qry = el => document.querySelector(el)

func.dado = (x) => Math.floor(Math.random() * x) + 1;

func.rollArr = arr => arr[func.dado(arr.length) - 1]

func.handleChange = (event, $state) => $state(event.target.value)

func.$irmaos = (obj,qtd) => {
    const {roupas,cabelos,detalhes} = Fluxo.origens_e_estilo;
    const $gen = (func.dado(obj.sexo.length) - 1);
    const $artigo = !!$gen ? ['a','uma','ela'] : ['o','um','ele'];
    const x = []
    const filtraIrmaos = (string,gen) => {
        let st = string;
        if (string.indexOf('{artigo}') !== -1) st = string.replace('{artigo}', !!gen ? 'a' : 'o');
        return st;
    }

    for (let i = 0; i < qtd; i++) {
        const irmaos = {
            nome: "nome generico",
            genero: obj.sexo[$gen],
            artigo: $artigo,
            idade: filtraIrmaos(obj.idade[func.idadeIrmaos()],$gen),
            sentimentos: func.rollArr(obj.sentimentos),
            estilo: `${$artigo[2]} veste ${func.rollArr(roupas)}, seu cabelo é ${func.rollArr(cabelos)} e ${$artigo[2]} ${func.rollArr(detalhes)}.`
        }
        x.push(irmaos)
    }
    return x
}

func.$amigos = ev => {
    // console.log(ev)
    return{
        relacionamento: func.rollArr(ev.fazendo_um_amigo)
    }
}

func.$inimigos = ev => {
    // console.log(ev)
    // const obj = Fluxo.antecedente_familiar.irmaos
    return{
        fez_um_inimigo: func.rollArr(ev.fez_um_inimigo),
        a_causa: func.rollArr(ev.a_causa),
        quem_se_deu_mal: func.rollArr(ev.quem_se_deu_mal),
        o_que_vai_fazer_a_respeito: func.rollArr(ev.o_que_vai_fazer_a_respeito),
        o_que_ele_pode_fazer_contra_voce: func.rollArr(ev.o_que_ele_pode_fazer_contra_voce),
        
    }
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

func.filtraResp = (string,artigo = 0) => {
    
    let st = string;

    if (string.indexOf('{1D10x100}') !== -1) st = string.replace(/{1D10x100}/g, func.dado(10) * 1000)

    if (string.indexOf('{1D10}') !== -1) st = string.replace(/{1D10}/g, func.dado(10))

    if (string.indexOf('{x}') !== -1) st = string.replace(/{x}/g, artigo[0] === 'o' ? 'o' : 'a')
    
    if (string.indexOf('{y}') !== -1) st = string.replace(/{y}/g, artigo[0] === 'o' ? 'ele' : 'ela')
    
    return st

}

func.gep = (ev,anos) => {

    const bol = func.dado(2) - 1;

    return {
        nome: ev.nome,
        idade: anos,
        aconteceu_um_desastre: !!bol && func.filtraResp(func.rollArr(ev.aconteceu_um_desastre)),
        o_que_vai_fazer_a_respeito: !!bol && func.rollArr(ev.o_que_vai_fazer_a_respeito),
        voce_se_deu_bem: !bol && func.filtraResp(func.rollArr(ev.voce_se_deu_bem))
    }
    
}

func.origens_e_motivacoes_char = _ => {
    const $oe = Fluxo.origens_e_estilo;
    const origemRoll = func.dado($oe.origem_etnica.length) - 1;
    const gen = func.dado(2) - 1 ? 'homem' : 'mulher';

    return {
        origens_estilo: {
            genero: gen,
            artigo: gen === 'homem' ? ['o', 'um', 'ele'] : ['a', 'uma', 'ela'],
            roupas: func.rollArr($oe.roupas),
            cabelos: func.rollArr($oe.cabelos),
            detalhes: func.rollArr($oe.detalhes),
            origem: $oe.origem_etnica[origemRoll].origem,
            lingua: func.rollArr($oe.origem_etnica[origemRoll].lingua)
        },
    }
}

func.aei = (ev,anos) => {
    const bol = func.dado(2) - 1;    
    const gen = func.dado(2) - 1 ? 'homem' : 'mulher';
    const {roupas, cabelos, detalhes} = Fluxo.origens_e_estilo;
    const artigo = gen === 'homem' ? ['o', 'um', 'ele'] : ['a', 'uma', 'ela'];
    console.log(anos)
    return {
        nome: ev.nome,
        idade: anos,
        artigo: artigo,
        origens_e_motivacoes: func.origens_e_motivacoes_char(),
        info_amigo: !bol && func.$amigos(ev),
        info_inimigo: !!bol && func.$inimigos(ev),
        estilo: `${artigo[2]} veste ${func.rollArr(roupas)}, seu cabelo é ${func.rollArr(cabelos)} e ${artigo[2]} ${func.rollArr(detalhes)}.`
    }
    
}

func.va = (ev,anos) => {
    const $roll = func.dado(10)
    const val = $roll < 5 ? 0 : $roll === 5 ? 1 : $roll < 8 ? 2 : 3
    return {
        nome: ev.nome,
        idade: anos,
        como_foi: ev.como_foi[val],
        caso_amoroso_tragico: val === 1 && func.rollArr(ev.caso_amoroso_tragico),
        caso_amoroso_problematico: val === 2 && func.rollArr(ev.caso_amoroso_problematico),
        sentimentos_mutuos: func.rollArr(ev.sentimentos_mutuos),
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
        irmaos: !!$qtd && func.$irmaos($af.irmaos,$qtd)
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

    const eventos_da_vida = []
    
    const evento_deste_ano = idade => {
        const roll = func.dado(10)
        return roll < 4 ? func.gep($ev.eventos.grandes_problemas_exitos,idade) : roll < 7 ? func.aei($ev.eventos.amigos_e_inimigos,idade) : roll < 9 ? func.va($ev.eventos.vida_amorosa,idade) : 'Nada aconteceu este ano.'
        // return func.gep($ev.eventos.grandes_problemas_exitos,idade) //teste
        // return func.aei($ev.eventos.amigos_e_inimigos,idade) //teste
        //return func.va($ev.eventos.vida_amorosa,idade); //teste
    }

    for (let i = 0; i < anos; i++) eventos_da_vida.push(evento_deste_ano(i+16))

    return {
        nome: $ev.nome,
        eventos_da_vida: eventos_da_vida
    }    
} 

func.init = idade => {
    const obj = { 
        section1: func.section1(idade), 
        section2: func.section2(),
        section3: func.section3(),
        section4: func.section4(idade),
    }
    
    return JSON.stringify(obj)
}

export default func

