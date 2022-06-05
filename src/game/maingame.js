import { getElementError, render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import cheevos from "../cheevorepo/mall.json"
import "./game.css";
import $ from "jquery";

const Game = () => {

    const [p, pointsout] = useState(0);

    const incpts = () => {
        
        p++

        return (
            <span>{p}</span>
        )
    }

    const Timer = () => {

        return (
            <div id="timer">

            </div>
        )
    }

    const mall = [];
    const displaycheevs = [];

    function fourcheevs() {
        for (let c = 0; c < 4; c++) {
            const ch = mall[Math.round(Math.random() * mall.length)];
            for (let i of displaycheevs) {
                if (ch.title === i.title) {
                    c--;
                    console.log('title is same');
                    fourcheevs();
                }
            }
            displaycheevs.push(ch);
        }
    };

    (function mallcheevos() {
        const allcheevs = cheevos.achievements;
        for (let d in allcheevs) {
            const e = allcheevs[d];
            mall.push({ 'title': e.title, 'description': e.description, 'points': e.points, 'image': e.vid });
        }
        fourcheevs();
    }());

    console.log(displaycheevs);

    const OptionDivs = () => {

        const [cheevo, makenew] = useState();
        const [newc, replacement] = useState();

        $('#description').hide().fadeIn(200);

        const adddescription = (cheevodesc, pts, cheevoid) => {

            return (
                <div id="description">
                    <div className="desccopy">
                        {cheevodesc}
                    </div>
                    <button onClick={() => replacement(newcheevo(cheevoid))} className="cheevoitem-pointsbtn">
                        Found it! ({pts} points)
                    </button>
                </div>
            )
        }

        const outdivs = displaycheevs.map(
            (item, index) => (
                <div id={index} className="cheevoitem" onClick={() => makenew(adddescription(item.description, item.points, index))} key={index}>
                    {item.title}
                </div>
            )
        );

        const newcheevo = (id) => {

            const olditem = document.getElementById(id);
            const desc = document.getElementById('description');

            $(olditem)
                .animate({
                    "left": "110%",
                }, 150)
                .delay(250, function () {
                    $(olditem).remove();
                    $(desc).hide();
                });

            displaycheevs.slice(id);
            const newitem = mall[Math.round(Math.random() * mall.length)];
            displaycheevs.push(newitem);
        }

        return (
            <div id="cheevoparent" className="cheevoparent" key="cheevoparent">
                {outdivs}
                {newc}
                {cheevo}
            </div>
        )
    }

    const Points = () => {

    }

    return (
        <div>
            <Timer />
            <div className="points">{p}</div>
            <OptionDivs />
        </div>
    )
};

export default Game;