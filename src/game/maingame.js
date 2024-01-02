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
    const [c, cheevdetail] = useState();
    let mallcheevos = [];
    let currcheevs = [];

    function expandinfo (n, item) {

        console.log(n, item);

        item.fadeOut(200);

    }

    const set4cheevos = () => {

        for (let cu = 0; cu < 5; cu++) {

            const pick = mallcheevos[Math.floor(Math.round(Math.random() * mallcheevos.length))];

            if (currcheevs.length > 1) {

                for (let p of currcheevs) {

                    if (p.title === pick.title) {

                        currcheevs.splice(currcheevs.indexOf(p), 1);
                        cu--;

                    }

                    else {

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

        const outdivs = currcheevs.map(
            (item, index) => (
                <div id={index} className="cheevoitem" onClick={() => cheevdetail(expandinfo(index, $(this)))} key={index}>
                    {item.title}
                </div>
            )
        )

        return (
            outdivs
        )

    }

    const CheevoDescription = () => {

    }

    const PtsBtn = () => {

        return (
            <button className="cheevobtn">Found it! (X points)</button>
        )
    }

    return (
        <div className="cheevoparent">
            <Points id="points" /><Timer id="timer" />
            <Cheevos/>
            <CheevoDescription>
                {c} 
            </CheevoDescription>
            <PtsBtn add={addpts} />
        </div>
    )
};

export default Game;