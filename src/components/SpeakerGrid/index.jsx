import React from "react";
import SpeakerCard from "../SpeakerCard";
import Speakers from '../../data/speakers.json'

import './index.css'

function SpeakerGrid() {
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
    return (
        <div className="container">
            <div className="auto-grid">

                {gridElements}

            </div>
        </div>
    );
}

export default SpeakerGrid