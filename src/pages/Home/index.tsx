import React from "react";
import './Home.css';


export default function Home() {
    return (

        <div className={"Location"}>
            <h4>EVENT LOCATION</h4>
            <h2>Location</h2>
            <div className={"map-responsive"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245554.5160673875!2d8.461073039596368!3d35.14763486835344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sen!2stn!4v1648990623167!5m2!1sen!2stn"
                    width="600" height="450" style={{border: 0}} allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
    )
}