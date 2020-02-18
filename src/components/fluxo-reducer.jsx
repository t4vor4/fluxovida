import React,{useReducer} from 'react'

import $f from './ControlFunc'

export const initialState = {
    origens_e_estilo: {},
    antecedente_familiar: {},
    motivacoes: {},
    grandes_problemas_exitos: {},
    amigos_e_inimigos: {},
    vida_amorosa: {},
    irmaos: {}
}

// console.log(state, action)
export const reducer = (state,action) => {
    switch (action.type) {
        case 'normal' :
            return action.value
            break;
    
        default:
            break;
    }
}
