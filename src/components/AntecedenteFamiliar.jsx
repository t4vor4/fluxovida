import React, { useReducer, useState, useEffect } from 'react';
import {initialState, reducer} from './fluxo-reducer'
import MySelect from './mySelect'
import $f from './ControlFunc';

export default (props) => {

    const {
        nivel_familiar,
        pais,
        algo_aconteceu_a_seus_pais,
        status_familiar,
        tragedia_familiar,
        o_ambiente_de_sua_infancia,
        irmaos } = props.item;

    const $type = 'antecedente_familiar'

    const monta_html_irmaos = (irmaos) => {
        let arrHtml = ''
        for (let i = 0; i < irmaos.length; i++) {
            const irmao = irmaos[i];
            const elHtml = `<ul class="irmao" data-index=${i}>
                    <li>Nome: ${irmao.nome}</li>
                    <li>Sexo: ${irmao.genero}</li>
                    <li>Idade: ${irmao.idade}</li>
                    <li>Idade: ${irmao.sentimentos}</li>
                </ul>`
            arrHtml = arrHtml+elHtml
        }
        return arrHtml
    }

    //irmaos

    let qtdIrmaos = $f.dado(10);

    qtdIrmaos = qtdIrmaos <= 7 ? qtdIrmaos : 0;

    // qtdIrmaos = 2;

    initialState.irmaos = $f.irmaosFunc(qtdIrmaos,irmaos);

    const [useIrmao, setUseIrmao] = useReducer(reducer, initialState); 
    // const [useQtd, setUseQtd] = useReducer(reducer, initialState.irmaos);
    
    useEffect(() => {

        document.querySelector('[quantidade]').innerText = useIrmao.irmaos.length;
        document.querySelector('[jujuba]').innerHTML = monta_html_irmaos(useIrmao.irmaos)
        
    })

    const mudaHtml = code => document.querySelector('[jujuba]').innerHTML = monta_html_irmaos(code)

    const addBro = (e,arr) => {

        const bro = arr

        const x = $f.irmaosFunc(1,irmaos)

        bro.irmaos.push( x[0] );
    
        setUseIrmao({type: 'normal', value: bro })

        document.querySelector('[quantidade]').innerText = useIrmao.irmaos.length;

        mudaHtml(bro.irmaos)

    }

    const removeBro = (e,arr) => {        

        const bro = arr

        bro.irmaos.pop()
    
        setUseIrmao({type: 'normal', value: bro })

        document.querySelector('[quantidade]').innerText = useIrmao.irmaos.length;

        mudaHtml(bro.irmaos)
    }

    return (
        <section className="flux_cont flux_cont--2">
            <h1>Antecedente familiar</h1>
            <ul>
                <li>Nível familiar: <MySelect arr={nivel_familiar} type={$type} name='nivel_familiar' /></li>
                <li>Pais: <MySelect arr={pais} type={$type} name='pais' /></li>
                <li>Algo aconteceu: <MySelect arr={algo_aconteceu_a_seus_pais} type={$type} name='algo_aconteceu_a_seus_pais' /></li>
                <li>Status familiar: <MySelect arr={status_familiar} type={$type} name='status_familiar' /></li>
                <li>O ambiente de sua infância: <MySelect arr={o_ambiente_de_sua_infancia} type={$type} name='o_ambiente_de_sua_infancia' /></li>
                <li>Tragédia familiar: <MySelect arr={tragedia_familiar} type={$type} name='tragedia_familiar' /></li>
                <li irmaosqtd="" >Irmãos: Quantidade  {
                    useIrmao.irmaos.length < 7 && (<button onClick={e => addBro(e,useIrmao)}>Adicionar</button>)}|
                    <span quantidade={useIrmao.irmaos.length}></span>|
                    {useIrmao.irmaos.length > 0 && (<button onClick={e => removeBro(e,useIrmao)}>Remover</button>)
                }</li>
                <div>Características dos irmãos: <span jujuba=""></span></div>
            </ul>
        </section>
    )
}
