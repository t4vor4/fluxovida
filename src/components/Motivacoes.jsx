import React from 'react';

export default (props) => {
    const {
        nome,
        caracteristicas_de_sua_personalidade,
        pessoa_que_mais_valoriza,
        o_que_mais_valoriza,
        qual_a_sua_opiniao_em_relacao_as_pessoas,
        seu_objeto_mais_estimado
    } = props.content;
    return (
        <section>
        <h2>{nome}</h2>
        <p>Você é uma pessoa {caracteristicas_de_sua_personalidade}.</p>
        <p>A pessoa que você mais valoriza é {pessoa_que_mais_valoriza}. Você valoriza {o_que_mais_valoriza} acima de tudo e sua opinião em relação às outras pessoas é {qual_a_sua_opiniao_em_relacao_as_pessoas}.</p>
        <p>O objeto que você mais gosta é {seu_objeto_mais_estimado}.</p>
      </section>
    )
}