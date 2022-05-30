import { render } from "@testing-library/react";
import React, { useState } from "react";
import Game from "../game/maingame";
import "./menu.css";

const Menu = () => {

    const togame = () => {
        console.log('make stuff happen here.');

        return (
            {c}
        )
    };

    const [c, topage] = useState();

    return (
        <div>
            <div id="headertxt">
                Cheevo Scavenger
            </div>
            <div id="menu">
                <div id="play" onClick={() => topage(togame)} className="menubtn">
                    play
                </div>
                <div id="howto" className="menubtn">
                    how to
                </div>
                <div id="credits" className="menubtn">
                    credits
                </div>
            </div>
        </div>
    )
}

export default Menu;