import './App.css';
import Menu from './menu/menumain';
import Game from './game/maingame';
import Results from './results/results';
import Credits from './credits/credits';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';


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

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/game" element={<Game/>}/>
        <Route path="/credits" element={<Credits/>} />
      </Routes>
    </BrowserRouter>
  )
}