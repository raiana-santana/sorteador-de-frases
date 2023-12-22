import './App.css';
import imagem from './img/bunny.png';
import {useState} from 'react';

function App() {

  const frases = [
    "Sorria para o mundo, e o mundo sorri de volta para você.",
    "A fé move montanhas.",
    "Quando você foca no bom, o bom se multiplica.",
    "Não deixe que momentos difíceis te derrubem.",
    "Acredite em você mesmo e tudo será possível.",
    "Quando você foca no bom, o bom se multiplica.",
    "Tenha fé nas reviravoltas da vida.",
    "Creia na magia dos recomeços.",
    "A fé é a força que nos faz superar o impossível.",
    "Seja a luz que você procura no mundo.",
    "Confie no processo e no tempo certo das coisas.",
    "Acredite na beleza dos seus sonhos.",
    "A fé é a ponte entre o que é impossível e o que é possível.",
    "O otimismo transforma obstáculos em oportunidades.",
    "Cada novo dia é uma nova oportunidade para melhorar.",
  ];

  const [frase, setFrase] = useState("Aperte o botão para ver a sua sorte do dia!");

  function handleBtnSorteClick(){
    while (true){
      let index = Math.floor(Math.random() * frases.length);
      if (frases[index] !== frase){
        setFrase(frases[index]);
        break;
      }
    }
    
  }

  return (
    <div className="App">
      <h1>Sorte do Dia</h1>
      <img src={imagem} alt='coelho' className='imagem' />
      <p>"{frase}"</p>
      <button onClick = {handleBtnSorteClick}>Estou com sorte</button>
    </div>
  );
}

export default App;