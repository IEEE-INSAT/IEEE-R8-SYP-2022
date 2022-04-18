import React from "react";
import construction from "../../assets/images/construction.png"

import './UnderConstruction.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Bounce from "react-reveal/Bounce"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade"

export default function UnderConstruction(){
    return (
        <Fade>
            <div className="construction">
                <Bounce>
                    <img src={construction} alt="construction" />
                    <p>website under<br/>construction</p>
                </Bounce>
            </div>
        </Fade>
    );
}