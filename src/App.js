import React, { useState, useEffect } from 'react';
// import Origem from './components/Origens';
// import Antecedente from './components/AntecedenteFamiliar';
// import Motivacoes from './components/Motivacoes';
// import Eventos from './components/EventosDaVida';
import $f from './components/ControlFunc';
import Compirmaos from './components/CompIrmaos';
import Fluxo from './json/fluxovida.json';
import './App.css';


function App() {

  // console.log(Fluxo)

  const [initial, setInitial] = useState(
    JSON.parse($f.init($f.idade()))
  );

  const s1 = initial.section1;
  const s2 = initial.section2;
  const s3 = initial.section3;
  const s4 = initial.section4;


  useEffect(() => {
    // console.log(s2.irmaos);
    // console.log(initial.section2)
    // console.log(initial.section3)
    // console.log(initial.section4)
  })
  return (
    <div className="content_page">

      <header>
        <h1>Fluxovida <small>um gerador de background para personagens cyberpunks</small></h1>
      </header>
      <section>
        <h2>{s1.section_nome}</h2>
        <h3>Roupas e estilo pessoal</h3>
        <p>Você tem {s1.idade} anos.</p>
        <p>Você veste {s1.roupas}. Seu cabelo é {s1.cabelos} e você {s1.detalhes}.</p>
        <p>Você tem origem {s1.origem} e sua língua materna é {s1.lingua}</p>
      </section>

      <section>
        <h2>Antecedente Familiar</h2>
        <ul>
          <p>O nível de sua familia é o de {s2.nivel_familiar}. {s2.pais} {!!s2.algo_aconteceu_a_seus_pais && s2.algo_aconteceu_a_seus_pais}.</p>
          <p>{s2.status_familiar} {!!s2.tragedia_familiar && s2.tragedia_familiar}.</p>
          <p>{s2.o_ambiente_de_sua_infancia}</p>
        </ul>
        <h3>Irmãos</h3>
        {<Compirmaos irmaos={s2.irmaos} />}
      </section>

      <section>
        <h2>Motivações</h2>
        <p>Você é uma pessoa {s3.caracteristicas_de_sua_personalidade}.</p>
        <p>A pessoa que você mais valoriza é {s3.pessoa_que_mais_valoriza}. Você valoriza {s3.o_que_mais_valoriza} acima de tudo e sua opinião em relação às outras pessoas é {s3.qual_a_sua_opiniao_em_relacao_as_pessoas}.</p>
        <p>O objeto que você mais gosta é {s3.seu_objeto_mais_estimado}.</p>
      </section>

      <section>
        <h2>Eventos da sua vida</h2>
        <ul>

        </ul>
      </section>
      <footer></footer>
      {/* {initial} */}


      {/* <button onClick={ _ => setInitial($f.init($f.idade()))}>Re-rolar</button> */}
    </div>
  );
}

export default App;
