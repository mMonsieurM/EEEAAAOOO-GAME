import logo from './logo.svg';
import './App.css';
import React, {state, useState, setState, useEffect} from 'react';

// Importation image et son 
// Librairie utilisé : useSound (https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)
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


//*** SCRIPT DU JEU ***//

    //Appuyer bouton start -> Afficher score
    //Afficher "WAIT"
    // JOUER MELODIE
    //AFFICHER PLAY
    //VERIFIER MELODIE
    //SI TRUE -> score up -> JOUER MELODIE SUIVANTE
    // SI FALSE -> Score down -> REJOUER MELODIE
    // Ajouter multiplicateur
    //SI START -> Alert confirmation -> Si oui newgame -> Si non close alert

  
//*** Code Adandonné : ajouter au click l'id du bouton selectionné pour le mécanisme du jeu ***//

    // function addToPlayer(id) {
    //   var field = "#"+id
    //   console.log(field);
    //   game.player.push(field);
    //   playerTurn(field);
    // } 

  
//*** Code Adandonné : systeme de mapping des boutons ***//

    // const clickables = [
    //   { name: "a" },
    //   { name: "b" },
    //   { name: "c" },
    // ]
 

 //*** Variables activant le sound lors du clic (ps : le son play10 était le slogan du jeu (sounds/3-4.mp3) ***//

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


//*** Code Adandonné : fonctions de test pour activer l'évenement lors du clic ***//

    // function eventHandler1(){
    //   console.log('eventHandler1 called!');
    // }
  
    // function eventHandler2() {
    //   console.log('eventHandler2 called!');
    // }

    // function boomingOn(){
    //   console.log("on");
    // } 
    // function boomingOff(){
    //   console.log("off");
    // }

    // function handleClick1() {
    //   let oklm = !this.state.booming;
    //   this.setState({booming: oklm});
    //   oklm ? this.boomingOn() : this.boomingOff();
    //   eventHandler1();
    //   eventHandler2(); 
    // }


//*** Code Adandonné : constructor (ancienne génération), difficile à comprendre les différents manières d'écrire React ***//

    // constructor() {
    //   super();
    //   this.state = {
    //     booming :false;
    //   }
    // }


//*** State moderne écrit pour être reactif avec la fonction onclick des boutons de couleurs  ***//

    const [count, setCount] = useState(0);
    const [active1, setActive1] = useState('');
    const [active2, setActive2] = useState('');

//*** Code Adandonné : tentative de faire varier la classe pour afficher le bouton qui joue de la musique (pour ne pas confondre le hover avec le actif) ***//
    // let booming = state.booming ? "boom" : "";


//*** variable pour changer le texte du Bouton principal ***//
    const btn = "Start";


  return (
    <div className="App">

      {/* Image de présentation */}
      <div className="header"><img src={eao}/></div> 

      {/* Titre de présentation  */}
      <div style={{margin: "10px"}}>EEEAAAOOO GAME</div>

      {/* Petit mécanisme de combo de scoring associé au bouton */}
      <div className="start"><button onClick={() => setCount((count*3-(count-2)))}>{btn}</button></div>

      {/* Affichage du score */}
      <div style={{margin: "10px"}} className="score">{count}</div>


      {/* Début du jeu */}
      <div className="game">

        {/* Premiere ligne de boutons */}
        <div className="row">
        {/* Code Adandonné : tentative de test pour activer les boutons après clic */}
          {/* <div id="green" className={`gamebutton ${active1}`} onMouseDown={play1} onClick={() => setActive1("boom__green"), setTimeout(()=>{setActive1("")},1000)}></div>
          <div id="yellow" className={`gamebutton ${active2}`} onMouseDown={play2} onClick={useEffect(()=>{setTimeout(()=>{setActive2("")},2000); setActive2("boom__green")}, [])} ></div> */}
          <div id="green" className="gamebutton" onClick={play1}></div>
          <div id="yellow" className="gamebutton" onClick={play2}></div>
          <div id="pink" className="gamebutton" onClick={play3}></div>
          
        </div>

        {/* Deuxieme ligne de boutons */}
        <div className="row">
          <div id="pink-light" className="gamebutton" onClick={play4}></div>
          <div id="purple" className="gamebutton" onClick={play5}></div>
          <div id="orange" className="gamebutton" onClick={play6}></div>
        </div>
        
        {/* Troisieme ligne de boutons */}
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
