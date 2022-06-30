import SpeakerCard from "../SpeakerCard";
import React, { ReactElement } from "react";
import './style.css'
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
            <div className="title">
                <h1>{type} : {name}</h1>
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
                <h2>Synopsis</h2>
                <p>{description}</p>
            </div>
            <hr/>
            <div className="instructor">
                <h2>About the instructor</h2>
                <div className="SpeakerCardContainer">
                    <SpeakerCard name={instructorName} linkedin={linkedin} description={instructorDesc} highlight={instructorHighlight} tutorial={true} image_dir={"/images/MainActivities/"} />
                </div>
            </div>
        </div>
    );
}