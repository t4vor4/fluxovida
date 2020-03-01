import React, { useReducer } from 'react'

import $f from './ControlFunc'

export const initialObj = {}

export const estaLingua = null;

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
        case 'obj':
            return action.value
            break;

        case 'localOrigem': 
            return action.value
            break;

        case 'lingua':
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
