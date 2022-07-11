import SpeakerCard from "../SpeakerCard";
import React, { ReactElement } from "react";
import './style.css';
interface ActivityDetailsProps{
    activity: { id:number, type: string; name: string; description: string; date: string; time: string; location: string; instructorName: string; instructorDescription: string; instructorHighlight: string; linkedin: string; }
}
export default function ActivityDetails(props:ActivityDetailsProps):ReactElement{
const {type,name,description,date,time,location,linkedin,instructorName,instructorDescription,instructorHighlight}=props.activity;
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
                <h2 className="secondarytitle">About the instructor</h2>
                <div className="SpeakerCardContainer">
                    <SpeakerCard name={instructorName} linkedin={linkedin} description={instructorDescription} highlight={instructorHighlight} tutorial={true} image_dir={"/images/speakers/"} />
                </div>
            </div>
        </div>
    );
}