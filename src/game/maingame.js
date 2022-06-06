import { getElementError, render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import cheevos from "../cheevorepo/mall.json"
import "./game.css";
import $ from "jquery";

//GAME MAIN SECTION
//CHEEVO OPTIONS
//TIMER
//POINTS COLLECTION
//MUSIC?

const Game = () => {

    const [p, addpts] = useState(0);
    let mallcheevos = [];
    let currcheevs = [];

    const set4cheevos = () => {

        for (let cu = 0; cu < 4; cu++) {

            const pick = mallcheevos[Math.floor(Math.round(Math.random() * mallcheevos.length))];
            
            if (currcheevs.length > 1){

                for (let p of currcheevs){

                    if (p.title === pick.title){

                        console.log('same title', p.title, pick.title, currcheevs.indexOf(p));
                        currcheevs.splice(currcheevs.indexOf(p),1);
                        cu--;
                        
                    }

                    else {
                        console.log('different titles', p.title, pick.title);
                    }
                }
            }

            currcheevs.push(pick);

        }

        console.log('final output', currcheevs);

    };

    const convjson = (inj, host) => {
        for (let c in inj) {
            host.push(inj[c]);
        };
        set4cheevos();
    }

    convjson(cheevos.achievements, mallcheevos);

    const Points = () => {

        return (
            <div id="points">{p}</div>
        )
    }

    const Timer = () => {

    }

    const Cheevos = () => {

        return (
            <div className="cheevoitem">Item X</div>
        )
    }

    const CheevoDescription = () => {

        return (
            <div id="description" >Description of item</div>
        )
    }

    const PtsBtn = () => {

        return (
            <button className="cheevobtn">Found it! (X points)</button>
        )
    }

    return (
        <div className="cheevoparent">
            <Points id="points" /><Timer id="timer" />
            <Cheevos />
            <CheevoDescription />
            <PtsBtn add={addpts} />
        </div>
    )
};

export default Game;