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


  // useEffect(() => {
  //   console.log(s4);
  //   // console.log(initial.section2)
  //   // console.log(initial.section3)
  //   // console.log(initial.section4)
  // })

  return (
    <div className="content_page">

      <header>
        <h1>Fluxo<br/>vida <small>um gerador de background para personagens cyberpunks</small></h1>
      </header>
      
      <Origem content={initial.section1}/>
      <Antecedente content={initial.section2} />
      <Motivacoes content={initial.section3} />
      <Eventos content={initial.section4} />
      
      <aside>
        <button onClick={ _ => setInitial(JSON.parse($f.init($f.idade())))}>Gerar nova história</button>
      </aside>
      
      <footer></footer>
      {/* {initial} */}


      
    </div>
  );
}

export default App;
