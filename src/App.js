import React, {useState} from 'react';
// import Origem from './components/Origens';
// import Antecedente from './components/AntecedenteFamiliar';
// import Motivacoes from './components/Motivacoes';
// import Eventos from './components/EventosDaVida';
import $f from './components/ControlFunc';
import Fluxo from './json/fluxovida.json';
import './App.css';


function App() {

  // console.log(Fluxo)

  const [initial,setInitial] = useState(JSON.parse($f.init($f.idade())))

  console.log(initial.section1)
  console.log(initial.section2)
  console.log(initial.section3)
  console.log(initial.section4)

  
  return (
    <div className="App">
      <h1>Teste</h1>
      <span>
      {/* {initial} */}
      </span>
      <br/>
      <button onClick={ _ => setInitial(JSON.parse($f.init($f.idade())))}>Re-rolar</button>
    </div>
  );
}

export default App;
