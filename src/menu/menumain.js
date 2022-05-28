import React, { useState } from "react";
import "./menu.css";

const Menu = () => {

    const [c, topage] = useState();



    return (
        <div>
            <div id="headertxt">
                Cheevo Scavenger
            </div>
            <div id="menu">
                <div id="play" onClick={() => topage()} className="menubtn">play</div>
                <div id="howto" className="menubtn">how to</div>
                <div id="credits" className="menubtn">credits</div>
            </div>
        </div>
    )
}

export default Menu;