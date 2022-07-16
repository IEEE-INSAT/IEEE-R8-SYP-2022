import SpeakerCard from "../SpeakerCard";
import React, {ReactElement} from "react";
import './style.css';

interface ActivityData {
    id: number;
    type: string;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    instructorName: string;
    instructorDescription: string;
    instructorHighlight: string;
    linkedin: string;
    instructor2Name?: string;
    instructor2Description?: string;
    instructor2Highlight?: string;
    linkedin2?: string;
}

interface ActivityDetailsProps {
    activity: ActivityData
}

export default function ActivityDetails(props: ActivityDetailsProps): ReactElement {
    const {
        type,
        name,
        description,
        date,
        time,
        location,
        linkedin,
        instructorName,
        instructorDescription,
        instructorHighlight,
        instructor2Name,
        instructor2Description,
        instructor2Highlight,
        linkedin2,
    } = props.activity;
    return (
        <div className="ActivityDetails">
            <div className="title">
                <h1> {name}</h1>
            </div>
            <hr/>
            <div className="dateTime">
                <i className="fa-solid fa-location-dot"></i><p> {location}</p>
                <br/>
                <i className="fa-solid fa-calendar"></i><p> {date}</p>
                <br/>
                <i className="fa-solid fa-clock"></i><p> {time}</p>
            </div>
            <hr/>
            <div className="synopsis">
                <h2 className="secondarytitle">Synopsis</h2>
                <p>{description}</p>
            </div>
            <hr/>
            <div className="instructor">
                <h2 className="secondarytitle">About the instructor{instructor2Name ? 's' : ''}</h2>
                <div className="SpeakerCardContainer">
                    <SpeakerCard name={instructorName} linkedin={linkedin} description={instructorDescription}
                                 highlight={instructorHighlight} tutorial={true} image_dir={"/images/speakers/"}/>
                </div>
            </div>
            {
                instructor2Name && linkedin2 && instructor2Description && instructor2Highlight ?
                    <div className="SpeakerCardContainer">
                        <SpeakerCard name={instructor2Name} linkedin={linkedin2} description={instructor2Description}
                                     highlight={instructor2Highlight} tutorial={true} image_dir={"/images/speakers/"}/>
                    </div>
                    : null
            }
        </div>
    );
}