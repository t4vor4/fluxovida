import React,{useReducer, useState, useEffect } from 'react';
import {initialState, respIrmao, reducer, thisQtd} from './fluxo-reducer'
import $f from './ControlFunc';

export default (props) => {

    //variavel recebe a resposta

    const monta_html_irmaos = (irmaos) => {
        const arrHtml = []
        for (let i = 0; i < irmaos.length; i++) {
            const irmao = irmaos[i];
            const elHtml = (<ul className="irmao" key={i} data-index={i}>
                    <li>Nome: {irmao.nome}</li>
                    <li>Sexo: {irmao.genero}</li>
                    <li>Idade: {irmao.idade}</li>
                    <li>Idade: {irmao.sentimentos}</li>
                </ul>)
            arrHtml.push(elHtml)
        }
        return arrHtml
    }

    const [$qtd, setQtd] = useReducer(reducer, thisQtd);

    const {bro} = props


    initialState.irmaos = $f.irmaosFunc(thisQtd,bro);

    const [list, setList] = useReducer(reducer, initialState); 

    const htmlpronto = monta_html_irmaos(initialState.irmaos)

    const [brohtml, setBroHtml] = useReducer(reducer, htmlpronto);

    useEffect(() => {
        console.log(initialState)
        // qtdIrmaos = initialState.irmao.length 
    })


    /* ********************************************************* */

    

    const addBro = _ => {
        const anapolis = (<div>amanda</div>)
        setBroHtml({type: 'irmao', value: anapolis })
    }

    const remBro = lista => {

        initialState.irmaos.pop();
        
        setList({type: 'normal', value: initialState })

        const $html = monta_html_irmaos(initialState.irmaos)
        
        setBroHtml({type: 'irmao', value: $html })        

    }
    
    return (
        <div>
            <button className="add" onClick={ e => addBro() }>Add</button>
            <button className="add" onClick={ e => remBro(list) }>Remove</button>
            { brohtml }
        </div>
    ) 
}