import { render } from "@testing-library/react";
import React from "react";
import Menu from "../menu/menumain";

const Game = () => {

    const Option1 = () => {
        return (
            <div>
                Cheevo1
            </div>
        )
    }

    const Option2 = () => {

    }

    const Option3 = () => {

    }

    const Option4 = () => {

    }

    return (
    <div>
        <Option1/>
        <Option2/>
        <Option3/>
        <Option4/>
    </div>
    )
};

export default Game;