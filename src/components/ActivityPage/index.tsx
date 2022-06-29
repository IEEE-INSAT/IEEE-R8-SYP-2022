import SpeakerCard from "../SpeakerCard";
import React, { ReactElement } from "react";
interface ActivityPageProps{
    type: string,
    name: string,
    description : string,
    date: string,
    time: string,
    location : string,
    instructorName : string,
    instructorDesc : string,
    instructorHighlight : string,
    linkedin: string
}
export default function ActivityPage(props:ActivityPageProps):ReactElement{
    const {type,name,description,date,time,location,linkedin,instructorName,instructorDesc,instructorHighlight}=props;
    return (
        <div className="ActivityPage">
            <h1>{type} : {name}</h1>
            <hr/>
            <i className="fa-solid fa-location-dot"></i><h3>{location}</h3>
            <br/>
            <i className="fa-solid fa-calendar"></i><h3>{date}</h3>
            <br/>
            <i className="fa-solid fa-clock"></i><h3>{time}</h3>
            <hr/>
            <h2>Synopsis</h2>
            <br/>
            <p>{description}</p>
            <hr/>
            <h2>About the instructor</h2>
            <SpeakerCard name={instructorName} linkedin={linkedin} description={instructorDesc} highlight={instructorHighlight} tutorial={true} image_dir={"/images/MainActivities/"} />
        </div>
    );
}