import React from 'react';

export default (props) => {
    console.log(props.content)
    const {
        nome,
        como_foi,
        idade,
        caso_amoroso_tragico,
        caso_amoroso_problematico,
        sentimentos_mutuos

    } = props.content;
    return (
        <>
        <h4>Aos <span class="idade">{idade} anos</span> você teve {como_foi}</h4>
        <p>{!!caso_amoroso_tragico && caso_amoroso_tragico}{!!caso_amoroso_problematico && caso_amoroso_problematico} {!!sentimentos_mutuos && `Hoje ${sentimentos_mutuos}`}</p>
        <p></p>

        </>
    )
}