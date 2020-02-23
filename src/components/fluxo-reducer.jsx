import React, { useReducer } from 'react'

import $f from './ControlFunc'

export const initialState = {
    origens_e_estilo: {},
    antecedente_familiar: {},
    motivacoes: {},
    grandes_problemas_exitos: {},
    amigos_e_inimigos: {},
    vida_amorosa: {},
    irmaos: {},
}

export const respIrmao = (
    <div>Características dos irmãos: 
        <span jujuba=""></span>
    </div>
)

export const thisQtd = _ => {
    let qtdIrmaos = $f.dado(10);
    qtdIrmaos = qtdIrmaos <= 7 ? qtdIrmaos : 0;
    return qtdIrmaos
}

// console.log(state, action)
export const reducer = (state, action) => {
    switch (action.type) {
        case 'normal':
            return action.value
            break;

        case 'qtd':
            return action.value
            break;

        case 'irmao':
            return (
                <div>Características dos irmãos: 
                    <span jujuba="">{action.value}</span>
                </div>
            )
            break;

        default:
            break;
    }
}
