import logo from './logo.svg';
import './App.css';
import eao from './eeeaaaooo.jpg';

function App() {
  return (
    <div className="App">
      <div className="header"><img src={eao}/></div>
      <div>EEEAAAOOO GAME</div>
      <div className="game">
        <div id="green" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="yellow" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="pink" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="blue" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="blue" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="blue" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="blue" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="blue" className="gamebutton" onClick="addToPlayer(this.id)"></div>
        <div id="blue" className="gamebutton" onClick="addToPlayer(this.id)"></div>
      </div>
      <div className="start"><button onclick="gameOn()">Start</button></div>
      
        


    </div>
  );
}

export default App;
