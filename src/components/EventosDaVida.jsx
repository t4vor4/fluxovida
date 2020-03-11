import React from 'react';
import ProblemasExitos from './ProblemasExitos';
import AmigosInimigos from './AmigosInimigos';
import VidaAmorosa from './VidaAmorosa';

export default (props) => {
    // console.log(props.content)

    const { nome, eventos_da_vida } = props.content;

    const listaEventos = []

    for (let i = 0; i < eventos_da_vida.length; i++) {
        const evento = eventos_da_vida[i];

        switch (evento.nome) {
            case "Grandes problemas e grandes êxitos":
                listaEventos.push(<li key={i} className="eventos_da_vida__li"><ProblemasExitos content={evento} /></li>)
                break;

            case "Amigos e inimigos":
                listaEventos.push(<li key={i} className="eventos_da_vida__li"><AmigosInimigos content={evento} /></li>)
                break;

            case "Vida amorosa":
                listaEventos.push(<li key={i} className="eventos_da_vida__li"><VidaAmorosa content={evento} /></li>)
                break;

            //     // case "Grandes problemas e grandes êxitos":
            //     //     <ProblemasExitos content={evento} />
            //     //     break;


        }

    }

    return (
        <section className="eventos_da_vida">
            <h2>{nome}</h2>
            <ul className="eventos_da_vida__ul">{listaEventos}</ul>
        </section>
    )
}