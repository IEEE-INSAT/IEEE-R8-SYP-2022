import React from "react";
import SpeakerCard from "../SpeakerCard";
import Speakers from '../../data/program/speakers.json'

import './index.css'

function SpeakerGrid(props) {
    const gridElements = Speakers.map((speaker, index) =>
        <SpeakerCard
            name={speaker.name}
            highlight={speaker.highlight}
            linkedin={speaker.linkedin}
            description={speaker.description}
            tutorial={index == 0}
            key={speaker.name}
            image_dir='/images/speakers/'
        />
    )
     /* eslint-disable react/prop-types */
    const limit=props.limit?props.limit:undefined;
    return (
        <div className="container">
            <div className="auto-grid">

                {gridElements.slice(0,limit)}

            </div>
        </div>
    );
}

export default SpeakerGrid