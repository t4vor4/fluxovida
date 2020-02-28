import React, {useReducer} from 'react';
import Origem from './components/Origens';
import Antecedente from './components/AntecedenteFamiliar';
import Motivacoes from './components/Motivacoes';
import Eventos from './components/EventosDaVida';
// import $f from './components/ControlFunc';
import Fluxo from './json/fluxovida.json';
import './App.css';


function App() {
  // $f.test();
  // console.log(Fluxo)

  const obj = {}
  
  return (
    <div className="App">
      <Origem item={Fluxo.origens_e_estilo}/>
      <Antecedente item={Fluxo.antecedente_familiar}/>
      <Motivacoes item={Fluxo.motivacoes}/>
      <Eventos />
    </div>
  );
}

export default App;
