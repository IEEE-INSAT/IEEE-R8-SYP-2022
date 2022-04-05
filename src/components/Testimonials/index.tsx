import React from "react";
import data from "./testimonials-data";
import orangeCircle from"./assets/OrangeCircle.png";
import blueCircle from"./assets/BlueCircle.png";

import './Testimonials.css';

export default function Testimonials() {
    const test = data;
    return (
        <div className="testimonials-container">
            <h4>WHAT OTHERS SAY</h4>
            <h2>Testimonials</h2>

            <div className="testimonial">

                <div className="testimonial-text-container">
                    <p className="description">{test[0].description}</p>
                    <span className="name">{test[0].name}</span>
                    <span className="role">{test[0].role}</span>
                </div>
                <div className="testimonial-image-container">
                    <img className="main-image" src={test[0].image} alt={test[0].name}/>
                    <img className="orange-circle" src={orangeCircle} alt=""/>
                    <img className="blue-circle" src={blueCircle} alt=""/>

                </div>
            </div>
        </div>
    );
}