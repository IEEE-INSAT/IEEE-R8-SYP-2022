import React from "react";
import orangeCircle from "../Testimonials/assets/OrangeCircle.png";
import blueCircle from "../Testimonials/assets/BlueCircle.png";
import "./TestimonialXL.css";

export default function TestimonialXL(props: { position: string, description: string, name: string, role: string, src: any }) {
    return (
        <div className={"testimonial " + props.position}>
            <div className="testimonial-text-container">
                <p className="description">{props.description}</p>
                <span className="name">{props.name}</span>
                <span className="role">{props.role}</span>
            </div>
            <div className="testimonial-image-container">
                <img className="main-image " src={props.src} alt={props.name}/>
                <img className="orange-circle" src={orangeCircle} alt=""/>
                <img className="blue-circle" src={blueCircle} alt=""/>
            </div>
        </div>
    );
}