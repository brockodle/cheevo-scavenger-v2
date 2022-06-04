import React, { useEffect, useState } from "react";
import cheevos from "../cheevorepo/mall.json"

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

        let outdivs = displaycheevs.map(
            item => (
                <div>{item.title}</div>
            )
        );

        return (
            <div>
                {outdivs}
            </div>
        )
    }

    return (
        <OptionDivs />
    )
};

export default Game;