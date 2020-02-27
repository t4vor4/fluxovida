import React, {useReducer,useEffect} from 'react';
import {initialState, estaLingua, reducer} from './fluxo-reducer'
import MySelect from './mySelect'
import $f from './ControlFunc';

export default (props) => {

    const {roupas, cabelos, detalhes, origem_etnica, origem, lingua } = props.item;

    const [localOrigem, setLocalOrigem] = useReducer(reducer, null ) 

    const [fala, setFala] = useReducer(reducer, estaLingua )

    const [thatState, setThatState] = useReducer(reducer,initialState)
    
    const cblocalOrigem = resp => {
        setLocalOrigem({type: 'localOrigem', value: resp  })   
        const x = !!localOrigem && origem_etnica.map( local => local.origem === localOrigem && local.lingua).filter(local => !!local)
        !!x[0] && setFala({type: 'lingua', value: x[0]})

        
    }

    useEffect(() => {
        var v = !!document.querySelector('.lang select') && document.querySelector('.lang select').value
        if (!!v) {
            initialState.origens_e_estilo.lingua = v
            setThatState({type: 'normal', value: initialState })
        }
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
                {/* <li>Região de origem: <MySelect arr={origem} cb={cblocalOrigem} type={$type} name='origem'/></li> */}
                <li>Região de origem: <MySelect arr={origem} cb={cblocalOrigem} type={$type} name='origem_etnica'/></li>
                {!!fala && (<li className="lang">Língua: <MySelect arr={fala} type={$type} name='lingua'/></li>)}
                
            </ul>
        </section>
    )
}


