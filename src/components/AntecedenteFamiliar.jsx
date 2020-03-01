import React, { useState, useEffect } from 'react';
import MySelect from './mySelect';
import Irmaoscomp from './irmaos';
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

    const [algoPais, setAlgoPais] = useState('');
    const [statusF, setStatusF] = useState('');

    const cbPais = cb => setAlgoPais(cb === 'Ambos estão vivos' ? !!1 : !!0)
    const cbStatus = cb => setStatusF(cb === 'O status da sua família está em perigo e você corre o risco de perder tudo (se já não perdeu)' ? !!0 : !!1)

    return (
        <section className="flux_cont flux_cont--2">
            <h1>Antecedente familiar</h1>
            <ul>
                <li>Nível familiar: <MySelect arr={nivel_familiar} type={$type} name='nivel_familiar' /></li>
                <li>Pais: <MySelect arr={pais} cb={cbPais} type={$type} name='pais' /></li>
                {!algoPais && (<li>Algo aconteceu: <MySelect arr={algo_aconteceu_a_seus_pais} type={$type} name='algo_aconteceu_a_seus_pais' /></li>)}
                <li>Status familiar: <MySelect arr={status_familiar} cb={cbStatus} type={$type} name='status_familiar' /></li>
                {!statusF && (<li>Tragédia familiar: <MySelect arr={tragedia_familiar} type={$type} name='tragedia_familiar' /></li>)}
                <li>O ambiente de sua infância: <MySelect arr={o_ambiente_de_sua_infancia} type={$type} name='o_ambiente_de_sua_infancia' /></li>                
                <li><Irmaoscomp  bro={irmaos} /></li>
            </ul>
        </section>
    )
}
