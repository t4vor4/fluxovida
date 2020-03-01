import React from 'react';
import ProblemasExitos from './ProblemasExitos';
import AmigosInimigos from './AmigosInimigos';
import VidaAmorosa from './VidaAmorosa';

export default (props) => {
    return (
        <section className="flux_cont flux_cont--4">
            <h1>Eventos da vida</h1>
            {/* <div className="flux_inner_cont flux_inner_cont--1">
                <h2>Grandes problemas, grandes êxitos</h2>
                <ul>
                    <li>Aconteceu um desastre!</li>
                    <li>O que você vai fazer a respeito?</li>
                    <li>Você se deu bem.</li>
                </ul>
            </div>
            <div className="flux_inner_cont flux_inner_cont--2">
                <h2>Amigos e inimigos</h2>
                <ul>
                    <li>Fez uma inimizade com: </li>
                    <li>A causa: </li>
                    <li>Quem se deu mal?</li>
                    <li>O que vai fazer a respeito?</li>
                    <li>O que ele pode fazer contra você?</li>
                    <li>Você fez uma amizade com:</li>
                </ul>
            </div> 
            <div className="flux_inner_cont flux_inner_cont--3">
                <h2>Vida amorosa</h2>
                <ul>
                    <li>Como foi?</li>
                    <li>Caso amoroso trágico.</li>
                    <li>Caso amoroso problemático.</li>
                    <li>Sentimentos mútuos:</li>
                </ul>
            </div>
            */}
            <ProblemasExitos />
            <AmigosInimigos />
            <VidaAmorosa />
        </section>
    )
}

