import React from "react";
import "./TestimonialSM.css";

export default function TestimonialSM(props: { role: string, src: any, name: string, description: string, position: string }) {
    return (
        <div className={"testimonial " + props.position} >
            <img className="testimonial-bg" src={props.src} alt=""/>
            <div className="testimonial-text-container">
                <p className="description">{props.description}</p>
                <span className="name">{props.name}</span>
                <span className="role">{props.role}</span>
            </div>
        </div>
    );
}
