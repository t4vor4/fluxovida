import React from 'react';

export default (props) => {
    const {
        nome,
        idade,
        info_amigo,
        info_inimigo,
        artigo,
        estilo
    } = props.content;    

    const {
        fez_um_inimigo,
        a_causa,
        quem_se_deu_mal,
        o_que_vai_fazer_a_respeito,
        o_que_ele_pode_fazer_contra_voce
    } = info_inimigo;

    console.log(idade)

    const inimigoFinal = string => {
        let x = string
        if (string.indexOf('{x}') !== -1) {
            return string.replace(/{x}/g, artigo[0] === 'o' ? 'o' : 'a')
        }
        if (string.indexOf('{y}') !== -1) {
            return string.replace(/{y}/g, artigo[0] === 'o' ? 'ele' : 'ela')
        }
        else {
            return string
        }
    }

    return !!info_amigo ? (
            <>
            <h4>Aos <span class="idade">{idade} anos</span> você fez {artigo[1]} nov{artigo[0]} amig{artigo[0]}.</h4>
            <p>{estilo}</p>
            </>
        ) : (
            <>
            <h4>Aos <span class="idade">{idade} anos</span> você fez {artigo[1]} inimig{artigo[0]}.</h4>
            <p>{estilo}</p>
            <p>{artigo[2]} é {artigo[1]} {inimigoFinal(fez_um_inimigo)} e você {inimigoFinal(a_causa)}. Por isso {inimigoFinal(quem_se_deu_mal)}.</p>
            <p>Agora você vai {inimigoFinal(o_que_vai_fazer_a_respeito)} enquanto {artigo[2]} pode {o_que_ele_pode_fazer_contra_voce}.</p>
            </>
        )
    
}