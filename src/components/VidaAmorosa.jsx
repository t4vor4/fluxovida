import React from 'react';

export default (props) => {
    console.log(props.content)
    const {
        nome,
        como_foi,
        caso_amoroso_tragico,
        caso_amoroso_problematico,
        sentimentos_mutuos

    } = props.content;
    return (
        <>
        <h4>{nome}</h4>
    <p>Você teve {como_foi}. {!!caso_amoroso_tragico && caso_amoroso_tragico}{!!caso_amoroso_problematico && caso_amoroso_problematico} {!!sentimentos_mutuos && `Hoje ${sentimentos_mutuos}`}</p>
        <p></p>

        </>
    )
}