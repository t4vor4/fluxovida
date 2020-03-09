import React from 'react';
import Compirmaos from './Irmaos';

export default (props) => {

    // console.log(props)

    const {
        nome,
        nivel_familiar,
        pais,
        algo_aconteceu_a_seus_pais,
        status_familiar,
        tragedia_familiar,
        o_ambiente_de_sua_infancia,
        irmaos
    } = props.content;

    return (
        <section>
            <h2>{nome}</h2>
            <p>O nível de sua familia é o de {nivel_familiar}. {pais} {!!algo_aconteceu_a_seus_pais && algo_aconteceu_a_seus_pais}.</p>
            <p>{status_familiar} {!!tragedia_familiar && tragedia_familiar}.</p>
            <p>{o_ambiente_de_sua_infancia}</p>

            <h3>Irmãos</h3>
            {<Compirmaos irmaos={irmaos} />}
        </section>
    )

}