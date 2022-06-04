import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Menu from "../menu/menumain";
import cheevos from "../cheevorepo/mall.json"

const Game = () => {

    const mall = [];

    (function mallcheevos() {
        const allcheevs = cheevos.achievements;
        for (let d in allcheevs) {
            const e = allcheevs[d];
            mall.push({ 'title': e.title, 'description': e.description, 'points': e.points, 'image': e.vid });
        }
    }());

    let copypick;

    const Option1 = () => {

        copypick = mall[Math.round(Math.random() * (mall.length))];

        return (
            <div>
                {copypick.title} &ndash; {copypick.description}
            </div>
        )
    }

    const Option2 = () => {

        copypick = mall[Math.round(Math.random() * (mall.length))];

        return (
            <div>
                {copypick.title} &ndash; {copypick.description}
            </div>
        )

    }

    const Option3 = () => {

        copypick = mall[Math.round(Math.random() * (mall.length))];

        return (
            <div>
                {copypick.title} &ndash; {copypick.description}
            </div>
        )

    }

    const Option4 = () => {

        copypick = mall[Math.round(Math.random() * (mall.length))];

        return (
            <div>
                {copypick.title} &ndash; {copypick.description}
            </div>
        )

    }

    return (
        <div>
            <Option1 />
            <Option2 />
            <Option3 />
            <Option4 />
        </div>
    )
};

export default Game;