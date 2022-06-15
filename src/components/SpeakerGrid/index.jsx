import React from "react";
import SpeakerCard from "../SpeakerCard";
import Speakers from '../../data/speakers.json'
import './index.css'
function SpeakerGrid(){
    const gridElements=Speakers.map( (speaker)=>
        <SpeakerCard 
            name={speaker.name}
            highlight={speaker.highlight}
            linkedin={speaker.linkedin}
            description={speaker.description}
            key={speaker.name}
        />
    )
    return(
        <div className="container">
        <div className="auto-grid">
            {gridElements}
            
        </div></div>
    );
}
export default SpeakerGrid