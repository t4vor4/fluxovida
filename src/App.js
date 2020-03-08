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
    console.log(s2.irmaos);
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
        <ul>
          <li>Idade: {s1.idade} anos</li>
          <li>Roupas: {s1.roupas}</li>
          <li>Cabelos: {s1.cabelos}</li>
          <li>Detalhes marcantes: {s1.detalhes}</li>
        </ul>
        <h3>Origens étnicas</h3>
        <ul>
          <li>Origem: {s1.origem}</li>
          <li>Idioma natal: {s1.lingua}</li>
        </ul>
      </section>

      <section>
        <h2>Antecedente Familiar</h2>
        <ul>
          <li>Nível Familiar: {s2.nivel_familiar}</li>
          <li>Seus país: {s2.pais}</li>
          {!!s2.algo_aconteceu_a_seus_pais && <li>O que houve com seus país? {s2.algo_aconteceu_a_seus_pais}</li>}
          <li>Status Familiar: {s2.status_familiar}</li>
          {!!s2.tragedia_familiar && <li>Tragédia familiar: {s2.tragedia_familiar}</li>}
          <li>O ambiente de sua infância: {s2.o_ambiente_de_sua_infancia}</li>
        </ul>
        <h3>Irmãos</h3>
        {<Compirmaos irmaos={s2.irmaos} />}

      </section>

      <section>
        <h2>Motivações</h2>
        <ul>
  <li>Sua personalidade: {s3.caracteristicas_de_sua_personalidade}</li>
  <li>A quem você dá mais valor? {s3.pessoa_que_mais_valoriza}</li>
  <li>O mais importante para você é {s3.o_que_mais_valoriza}</li>
        <li>Qual sua opinião em relação as pessoas em geral? {s3.qual_a_sua_opiniao_em_relacao_as_pessoas}</li>
        <li>O objeto pelo qual você tem mais carinho é {s3.seu_objeto_mais_estimado}</li>
        </ul>
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
