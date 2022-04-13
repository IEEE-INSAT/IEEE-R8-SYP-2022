// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ReactCardCarousel from 'react-card-carousel';
import Card from "../Card";
import "./Carousel.css"
import arrow from "../../assets/arrow.svg";

export default function Carousel(){
    const [carousel, setCarousel] = useState(null);

    return (
        <div className="carousel testimonials-container" >
            <h4>Organizers</h4>
            <h2>Meet the Team</h2>
            <p>A pack of diligent students yearning for improvement and development.</p>
            <div>
                <img src={arrow} alt="" onClick={() => carousel.prev()} />
                <ReactCardCarousel ref={ Carousel => setCarousel(Carousel) } spread="wide" autoplay={ true } autoplay_speed={ 2500 }>
                    <Card name="Khaldoun Taktak" role="Congress Chair" />
                    <Card name="Khaldoun Taktak" role="Congress Chair" />
                    <Card name="Khaldoun Taktak" role="Congress Chair" />
                </ReactCardCarousel>
                <img src={arrow} alt="" onClick={() => carousel.next()} />
            </div>
        </div>

      );
}