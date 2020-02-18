import React, { useState, useEffect } from 'react';
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

    //irmaos
    let qtdIrmaos = $f.dado(10)

    qtdIrmaos = qtdIrmaos <= 7 ? qtdIrmaos : 0

    qtdIrmaos = 0

    // const [qtdIrmaos, setQtdIrmaos] = useState($qtdIrmaos);

    const irmaosFunc = (resultado) => {

        const generoIrmao = gen => gen === 1 ? irmaos.sexo[0] : irmaos.sexo[1]
        const idadeIrmao = idade => idade <= 5 ? irmaos.idade[1] : idade <= 9 ? irmaos.idade[0] : irmaos.idade[2]
        const sentimentosIrmaos = sent => irmaos.sentimentos[(sent - 1)]
        const geraIrmao = (i = 0) => {
            return (
                <ul key={i} className="irmao">
                    <li>nome: {'Irmao' + i}</li>
                    <li>genero: {generoIrmao($f.dado(2))}</li>
                    <li>idade: {idadeIrmao($f.dado(10))}</li>
                    <li>sentimentos: {sentimentosIrmaos($f.dado(5))}</li>
                </ul>
            )
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

    const [irmFinal, setIrmirmFinal] = useState(irmaosFunc(qtdIrmaos));

    

    const addIrmao = bro => {
        // adiciona um irmao
        const x = irmaosFunc(1)
        bro.push(x[0])
        setIrmirmFinal(bro)
        console.log(x)
        const place = !!document.querySelector('li.bros') && document.querySelector('li.bros')
        !!place ? place.append(x[0]) : document.querySelector('[irmaosqtd]').after(<li className="bros">Características dos irmãos: {x[0]}</li>)
        
    }

    const removeIrmao = bro => {
        // adiciona um irmao
        bro.pop()
        setIrmirmFinal(bro)
        document.querySelector('ul.irmao:last-of-type').remove()
        console.log(irmFinal)
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
                    qtdIrmaos < 7 && (<button onClick={e => addIrmao(irmFinal)}>Adicionar</button>)}|
                    {qtdIrmaos}|
                    {qtdIrmaos > 0 && (<button onClick={e => removeIrmao(irmFinal)}>Remover</button>)
                }</li>
                {(!!qtdIrmaos && qtdIrmaos <= 7) && (<li className="bros">Características dos irmãos: {irmFinal }</li>)}
            </ul>
        </section>
    )
}
