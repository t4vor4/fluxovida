import React, {useState} from 'react';
// import Origem from './components/Origens';
// import Antecedente from './components/AntecedenteFamiliar';
// import Motivacoes from './components/Motivacoes';
// import Eventos from './components/EventosDaVida';
import $f from './components/ControlFunc';
import Fluxo from './json/fluxovida.json';
import './App.css';


function App() {
  // $f.test();
  console.log(Fluxo)

  const [initial,setInitial] = useState($f.init())
  


  
  return (
    <div className="App">
      <h1>Teste</h1>
      <span>
      {initial}
      </span>
      <br/>
      <button onClick={ _ => setInitial($f.init())}>Re-rolar</button>
    </div>
  );
}

export default App;
