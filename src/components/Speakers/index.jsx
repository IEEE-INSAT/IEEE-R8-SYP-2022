import React from 'react';
import './index.css';
import SpeakerGrid from '../SpeakerGrid';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";

function Speakers(){
    return(
        <div className="speakers-container">
            <h4>DISTINGUISHED GUESTS</h4>
            <h2>Our Speakers</h2>
            <SpeakerGrid/>
        </div>
    );
}
export default Speakers;