import React from 'react';

export default (props) => {
    const {section_nome,idade, roupas, cabelos, detalhes, origem, lingua} = props.content;
    return (
        <section>
        <h2>{section_nome}</h2>
        <p>Você tem {idade} anos.</p>
        <p>Você veste {roupas}. Seu cabelo é {cabelos} e você {detalhes}.</p>
        <p>Você tem origem {origem} e sua língua materna é {lingua}</p>
      </section>
    )
}