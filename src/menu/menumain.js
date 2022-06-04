import React, { useState } from "react";
import "./menu.css";

const Menu = () => {

    function Promptmain() {
        return (
            <div id="clickhappened">
                A click happened {c}
            </div>
        )
    }

    const logclick = () => {
        console.log('make stuff happen here.');

        return (
            <Promptmain/>
        )
    };

    const [c, topage] = useState();

    return (
        <div>
            <div id="headertxt">
                Cheevo Scavenger
            </div>
            <div id="menu">
                <div id="play" onClick={() => topage(logclick)} className="menubtn">
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