import React, { useState, useEffect } from 'react';
import Origem from './components/Origens';
import Antecedente from './components/AntecedenteFamiliar';
import Motivacoes from './components/Motivacoes';
import Eventos from './components/EventosDaVida';
import $f from './components/ControlFunc';

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


  // useEffect(() => {
  //   console.log(s4);
  //   // console.log(initial.section2)
  //   // console.log(initial.section3)
  //   // console.log(initial.section4)
  // })
  return (
    <div className="content_page">

      <header>
        <h1>Fluxovida <small>um gerador de background para personagens cyberpunks</small></h1>
      </header>
      <Origem content={s1}/>
      <Antecedente content={s2} />
      <Motivacoes content={s3} />
      <Eventos content={s4} />

      
      <footer></footer>
      {/* {initial} */}


      {/* <button onClick={ _ => setInitial($f.init($f.idade()))}>Re-rolar</button> */}
    </div>
  );
}

export default App;
