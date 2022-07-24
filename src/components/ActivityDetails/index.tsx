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
    instructorname: string;
    instructordescription: string;
    instructorhighlight: string;
    linkedin: string;
    instructor2name?: string;
    instructor2description?: string;
    instructor2highlight?: string;
    linkedin2?: string;
    instructor3name?: string;
    instructor3description?: string;
    instructor3highlight?: string;
    linkedin3?: string;
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
        instructorname,
        instructordescription,
        instructorhighlight,
        instructor2name,
        instructor2description,
        instructor2highlight,
        linkedin2,
        instructor3name,
        instructor3description,
        instructor3highlight,
        linkedin3,
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
                <h2 className="secondarytitle">About the instructor{instructor2name ? 's' : ''}</h2>
                <div className="SpeakerCardContainer">
                    <SpeakerCard name={instructorname} linkedin={linkedin} description={instructordescription}
                                 highlight={instructorhighlight} tutorial={true} image_dir={"/images/speakers/"}/>
                </div>
            </div>
            {
                instructor2name && linkedin2 && instructor2description && instructor2highlight ?
                    <div className="SpeakerCardContainer">
                        <SpeakerCard name={instructor2name} linkedin={linkedin2} description={instructor2description}
                                     highlight={instructor2highlight} tutorial={true} image_dir={"/images/speakers/"}/>
                    </div>
                    : null
            }
            {
                instructor3name && linkedin3 && instructor3description && instructor3highlight ?
                    <div className="SpeakerCardContainer">
                        <SpeakerCard name={instructor3name} linkedin={linkedin3} description={instructor3description}
                                     highlight={instructor3highlight} tutorial={true} image_dir={"/images/speakers/"}/>
                    </div>
                    : null
            }
        </div>
    );
}