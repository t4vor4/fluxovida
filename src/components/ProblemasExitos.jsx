import React from 'react';

export default (props) => {
    const {
        nome,
        idade,
        aconteceu_um_desastre,
        o_que_vai_fazer_a_respeito,
        voce_se_deu_bem
    } = props.content;

    return (
        <>
        <h4>{!!voce_se_deu_bem ? (<>Aconteceu algo legal nos seus <span class="idade">{idade} anos</span></>) : (<>Aconteceu algo ruim nos seus <span class="idade">{idade} anos</span></>)}.</h4>
        <p>{!!voce_se_deu_bem ? voce_se_deu_bem : `${aconteceu_um_desastre} ${o_que_vai_fazer_a_respeito}`}</p>
        </>
    )
}