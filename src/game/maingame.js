import { getElementError, render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import cheevos from "../cheevorepo/mall.json"
import "./game.css";
import $ from "jquery";

const Timer = () => {

    return (
        <div id="timer">

        </div>
    )
}

const Game = () => {

    const mall = [];
    const displaycheevs = [];

    (function mallcheevos() {
        const allcheevs = cheevos.achievements;
        for (let d in allcheevs) {
            const e = allcheevs[d];
            mall.push({ 'title': e.title, 'description': e.description, 'points': e.points, 'image': e.vid });
        }
        function fourcheevs() {
            for (let c = 0; c < 4; c++) {
                const ch = mall[Math.round(Math.random() * mall.length)];
                for (let i of displaycheevs){
                    if (ch.title === i.title){
                        c--;
                        console.log('title is same');
                        fourcheevs();
                    }
                }
                displaycheevs.push(ch);     
            }
        };
        fourcheevs();
    }());

    console.log(displaycheevs);

    const OptionDivs = () => {

        const [cheevo, makenew] = useState();
        const [newc, replacement] = useState();

        $('#description').hide().fadeIn(200);

        const newcheevo = (newid, pts, id) => {
            $('.cheevoitem-pointsbtn').on('tap, click', function(){
                $(`#${id}`).animate({
                    'left':'110%'
                }, 200).remove();
            });
        }

        const adddescription = (cheevodesc, pts) => {

            return(
                <div id="description">
                    <div className="desccopy">{cheevodesc}</div>
                    <button onClick={replacement(newcheevo())} className="cheevoitem-pointsbtn">Found it! ({pts} points)</button>
                </div>
            )
        }

        const outdivs = displaycheevs.map(
            (item, index) => (
                <div id={index} className="cheevoitem" onClick={() => makenew(adddescription(item.description, item.points))} key={index}>
                    {item.title}
                    {newc}
                </div>
            )
        );

        return (
            <div id="cheevoparent" className="cheevoparent" key="cheevoparent">
                {outdivs}
                {cheevo}
            </div>
        )
    }

    return (
        <div>
            <Timer/>
            <OptionDivs />
        </div>
    )
};

export default Game;