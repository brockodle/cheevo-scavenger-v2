import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Navigate, Route, Router, useNavigate } from "react-router-dom";
import App from "../App";
import Game from "../game/maingame";
import "./menu.css";

const Menu = () => {

    let navigate = useNavigate();

    const outofsite = (currpg) => {
        
        console.log('stuff happens');
        navigate(currpg);
    }

    return (
        <div id="mainapp">
            <div id="headertxt">
                Cheevo Scavenger
            </div>
            <div id="menu">
                <div id="play" onClick={() => outofsite('/game')} className="menubtn">
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