import './App.css';
import Menu from './menu/menumain';
import Game from './game/maingame';
import { Route, Router } from 'react-router-dom';
import Results from './results/results';
import Credits from './credits/credits';

//OVERALL GAME
    //MENU
        //PLAY
        //HOWTO
        //OPTIONS
        //CREDITS
    //GAME MAIN SECTION
        //CHEEVO OPTIONS
        //TIMER
        //POINTS COLLECTION
        //MUSIC?
    //RESULTS SCREEN
        //USERNAME
        //RECORDS
        //RETRY

const App = () => {

  return (
    <div>
      <Menu/>
      <Game/>
      <Credits/>
      <Results/>
    </div>
  )
}

export default App;