import React from 'react';

export default (props) => {
    const {
        nome,
        aconteceu_um_desastre,
        o_que_vai_fazer_a_respeito,
        voce_se_deu_bem
    } = props.content;

    return (
        <>
        <h4>{nome}</h4>
        <p>{!!voce_se_deu_bem ? voce_se_deu_bem : `${aconteceu_um_desastre} ${o_que_vai_fazer_a_respeito}`}</p>
        </>
    )
}