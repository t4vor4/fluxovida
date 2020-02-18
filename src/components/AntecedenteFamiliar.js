import React, { useState, useEffect } from 'react';
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
    const irmaosFunc = () => {
        const resultado = $f.dado(10)
        const generoIrmao = gen => gen === 1 ? irmaos.sexo[0] : irmaos.sexo[1]
        const idadeIrmao = idade => idade <= 5 ? irmaos.idade[1] : idade <= 9 ? irmaos.idade[0] : irmaos.idade[2]
        const sentimentosIrmaos = sent => irmaos.sentimentos[(sent - 1)]
        const geraIrmao = (i=0) => {
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
            // console.log('Numero de irmãos :', res)
            const irmaos = []

            for (let i = 0; i < res; i++) {
                irmaos.push(geraIrmao(i))
            }

            return irmaos
        }


        return resultado > 7 ? 'filho único' : temIrmaos(resultado)
    }

    // useEffect(() => {
    //     irmaosFunc()
    //     // console.log({
    //     //     famLvl: famLvl,
    //     //     pais:pais,
    //     //     algoAc:algoAc,
    //     //     statusFam: statusFam,
    //     //     ambienteInf: ambienteInf,
    //     //     tragedia: tragedia
    //     // })
    // });

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
                <li>Irmãos: {irmaosFunc()}</li>
            </ul>
        </section>
    )
}
