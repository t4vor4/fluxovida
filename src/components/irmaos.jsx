import React,{useReducer, useState, useEffect } from 'react';
import {initialState, respIrmao, reducer} from './fluxo-reducer'
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

    let qtdIrmaos = initialState.irmaos[0] === 0 ? $f.dado(10) : initialState.irmaos.length;
    qtdIrmaos = qtdIrmaos <= 7 ? qtdIrmaos : 0;

    const {bro} = props

    initialState.irmaos = initialState.irmaos[0] !== 0 && !!initialState.irmaos.length ? initialState.irmaos : $f.irmaosFunc(qtdIrmaos,bro);
    

    const [list, setList] = useReducer(reducer, initialState); 

    const htmlpronto = monta_html_irmaos(initialState.irmaos)

    const [brohtml, setBroHtml] = useReducer(reducer, htmlpronto);

    useEffect(() => {

        console.log(initialState)

        const $L = !!document.querySelectorAll('ul.irmao').length ? document.querySelectorAll('ul.irmao').length : 0;
        
        $f.qry('[addbro]').setAttribute('addbro',$L)

        $f.qry('[removebro]').setAttribute('removebro',$L)
    })


    /* ********************************************************* */

    

    const addBro = lista => {

        const newBro = $f.irmaosFunc(1,bro);
        
        initialState.irmaos.push(newBro[0])

        const $html = monta_html_irmaos(initialState.irmaos)

        setList({type: 'normal', value: initialState })
        
        setBroHtml({type: 'irmao', value: $html })

        console.log(initialState.irmaos)

        // setBroHtml({type: 'irmao', value: anapolis })
    }

    const remBro = lista => {

        initialState.irmaos.pop();
        
        const $html = monta_html_irmaos(initialState.irmaos)

        setList({type: 'normal', value: initialState })
        
        setBroHtml({type: 'irmao', value: $html })   

    }
    
    return (
        <div>
            <button className="add" addbro="" onClick={ e => addBro(list) }>Add</button>
            <button className="remove" removebro="" onClick={ e => remBro(list) }>Remove</button>
            { brohtml }
        </div>
    ) 
}