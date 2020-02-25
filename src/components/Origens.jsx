import React, {useReducer,useEffect} from 'react';
import {initialState, estaLingua, reducer} from './fluxo-reducer'
import MySelect from './mySelect'
import $f from './ControlFunc';

export default (props) => {

    const {roupas, cabelos, detalhes, origem, lingua } = props.item;

    // const lugar = origem_etnica.map( plc => plc.origem)

    // const lugar = origem_etnica.map( plc => plc.origem)

    

    const [fala, setFala] = useReducer(reducer, null )
    

    useEffect(() => {
        console.log(initialState)
    })

    const $type = 'origens_e_estilo'
    
    return (
        <section className="flux_cont flux_cont--1">
            <h1>Origens e estilo</h1>
            <h2>Roupas e estilo pessoal</h2>
            <ul>
                <li>Roupas: <MySelect arr={roupas} type={$type} name='roupas'/></li>
                <li>Cabelos: <MySelect arr={cabelos} type={$type} name='cabelos'/></li>
                <li>Detalhes marcantes: <MySelect arr={detalhes} type={$type} name='detalhes'/></li>
            </ul>
            <h2>Origem étnicas</h2>
            <ul>        
                {/* <li>Região de origem: <MySelect arr={lugar} cb={filtraLingua} type={$type} name='lugar'/></li> */}
                {/* <li>Região de origem: <MySelect arr={lugar} type={$type} name='lugar'/></li>*/}

                <li>Região de origem: <MySelect arr={origem} type={$type} name='origem'/></li>
                {!!fala && (<li>Língua: <MySelect arr={lingua} type={$type} name='lingua'/></li>)}
                
            </ul>
        </section>
    )
}


