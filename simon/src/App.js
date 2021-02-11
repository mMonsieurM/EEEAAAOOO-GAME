import logo from './logo.svg';
import './App.css';
import eao from './eeeaaaooo.jpg';
import useSound from 'use-sound';
import ta1 from './sounds/1-1.mp3';
import ta2 from './sounds/1-2.mp3';
import ta3 from './sounds/1-3.mp3';
import tin1 from './sounds/2-1.mp3';
import tin2 from './sounds/2-2.mp3';
import tin3 from './sounds/2-3.mp3';
import tili1 from './sounds/3-1.mp3';
import tili2 from './sounds/3-2.mp3';
import tili3 from './sounds/3-3.mp3';
import tili4 from './sounds/3-4.mp3';

function App() {

  // function addToPlayer(id) {
  //   var field = "#"+id
  //   console.log(field);
  //   game.player.push(field);
  //   playerTurn(field);
  // } 

  //Appuyer bouton start -> Afficher score
  //Afficher "WAIT"
  // JOUER MELODIE
  //AFFICHER PLAY
  //VERIFIER MELODIE
  //SI TRUE -> score up -> JOUER MELODIE SUIVANTE
  // SI FALSE -> Score down -> REJOUER MELODIE
  // Ajouter multiplicateur
  //SI START -> Alert confirmation -> Si oui newgame -> Si non close alert



 
    const [play1] = useSound(ta1);
    const [play2] = useSound(ta2);
    const [play3] = useSound(ta3);
    const [play4] = useSound(tin1);
    const [play5] = useSound(tin2);
    const [play6] = useSound(tin3);
    const [play7] = useSound(tili1);
    const [play8] = useSound(tili2);
    const [play9] = useSound(tili3);
    const [play10] = useSound(tili4);

  return (
    <div className="App">
      <div className="header"><img src={eao}/></div>
      <div style={{margin: "10px"}}>EEEAAAOOO GAME</div>
      <div className="start"><button onclick="gameOn()">Start</button></div>
      <div className="game">
        <div className="row">
          <div id="green" className="gamebutton" onClick={play1} ></div>
          <div id="yellow" className="gamebutton" onClick={play2}></div>
          <div id="pink" className="gamebutton" onClick={play3}></div>
        </div>

        <div className="row">
          <div id="pink-light" className="gamebutton" onClick={play4}></div>
          <div id="purple" className="gamebutton" onClick={play5}></div>
          <div id="orange" className="gamebutton" onClick={play6}></div>
        </div>
        
        <div className="row">
          <div id="black" className="gamebutton" onClick={play7}></div>
          <div id="blue" className="gamebutton" onClick={play8}></div>
          <div id="white" className="gamebutton" onClick={play9}></div>
        </div>

      </div>


    </div>
  );
}

export default App;
