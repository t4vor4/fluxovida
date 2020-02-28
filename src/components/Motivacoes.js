import React from 'react';
import MySelect from './mySelect';
export default (props) => {

    console.log(props.item);
    const {
        caracteristicas_de_sua_personalidade,
        pessoa_que_mais_valoriza,
        o_que_mais_valoriza,
        qual_a_sua_opiniao_em_relacao_as_pessoas,
        seu_objeto_mais_estimado
    } = props.item;
    
    const $type = 'motivacoes'

    return (
        <section className="flux_cont flux_cont--3">
            <h1>Motivações:</h1>
            <ul>
                <li>Personalidade: <MySelect arr={caracteristicas_de_sua_personalidade} type={$type} name='caracteristicas_de_sua_personalidade' /></li>
                <li>A pessoa que mais valoriza: <MySelect arr={pessoa_que_mais_valoriza} type={$type} name='pessoa_que_mais_valoriza' /></li>
                <li>O que mais valoriza: <MySelect arr={o_que_mais_valoriza} type={$type} name='o_que_mais_valoriza' /></li>
                <li>Opinião sobre a maioria das pessoas: <MySelect arr={qual_a_sua_opiniao_em_relacao_as_pessoas} type={$type} name='qual_a_sua_opiniao_em_relacao_as_pessoas' /></li>
                <li>Objeto mais estimado: <MySelect arr={seu_objeto_mais_estimado} type={$type} name='seu_objeto_mais_estimado' /></li>
            </ul>
        </section>
    )
}

