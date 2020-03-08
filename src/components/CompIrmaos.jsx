import React from 'react';

export default (props) => {
    const b = {}
    b.bro = props.irmaos;
    b.list = [];

    if (!!b.bro) {
        for (let i = 0; i < b.bro.length; i++) {
            const bro = b.bro[i];
            const tags = (
                <li key={i+'element'}>
                    <p>Você tem {bro.genero} que é {bro.idade} e {bro.artigo[2]} {bro.sentimentos}.</p>
                    <p>{bro.estilo}</p>
                </li>
            )
            b.list.push(tags)
        }

        b.final = <div>
            <p>Você tem {b.bro.length} irmão{b.bro.length > 1 && 's'}</p>
            <ul>{b.list}</ul>
        </div>
    }
    else {
        b.final = <div>
            <p>Você não tem irmãos.</p>
        </div>
    }

    return b.final
}