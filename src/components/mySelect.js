import React,{useReducer, useState, useEffect } from 'react';
import {initialState, reducer} from './fluxo-reducer'
import $f from './ControlFunc';

export default (props) => {

    const {arr,type,name,cb} = props;

    const [etv, setEtv] = useState($f.rollArr(arr));
    const $opts = [];

    initialState[type][name] = etv

    const [state, dispatch] = useReducer(reducer, initialState);   
     

    const handleChange = (val) => {
        setEtv(val)
        if(!!cb) {
            cb(val)
        }
        initialState[type][name] = val
        dispatch({type: 'normal', value: initialState  })
    }

    useEffect(() => {
        // console.log(initialState)
        if(!!cb) {
            cb(etv)
        }
        dispatch({type: 'normal', value: initialState  })
    })

    for(let i=0; i < arr.length; i++) {
        $opts.push(<option key={i} value={arr[i]}>{arr[i]}</option>)
    }

    return(
        <select value={etv} onChange={ e => handleChange(e.target.value) }>{$opts}</select>
    )
}
