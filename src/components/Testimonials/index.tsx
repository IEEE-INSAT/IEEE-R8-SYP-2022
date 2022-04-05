import React from "react";
import {useState, useEffect} from "react";

import data from "./testimonials-data";
import orangeCircle from "./assets/OrangeCircle.png";
import blueCircle from "./assets/BlueCircle.png";

import './Testimonials.css';

export default function Testimonials() {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    interface person {
        id: number;
        name: string;
        role: string;
        description: string;
        image: any;
    }

    return (
        <div className="testimonials-container">
            <h4>WHAT OTHERS SAY</h4>
            <h2>Testimonials</h2>
            <div className="section-center">
                {
                    people.map((item: person, indexPeople) => {
                        const {id, name, role, description, image} = item;
                        let position = "nextSlide";
                        if (indexPeople === index) {
                            position = "activeSlide";
                        }
                        if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                            position = "lastSlide";
                        }
                        return (
                            <div className={"testimonial " + position} key={id}>
                                <div className="testimonial-text-container">
                                    <p className="description">{description}</p>
                                    <span className="name">{name}</span>
                                    <span className="role">{role}</span>
                                </div>
                                <div className="testimonial-image-container">
                                    <img className="main-image " src={image} alt={name}/>
                                    <img className="orange-circle" src={orangeCircle} alt=""/>
                                    <img className="blue-circle" src={blueCircle} alt=""/>
                                </div>
                            </div>
                        );
                    })
                }
                <div className="buttons">
                    <button className="prev" onClick={() => setIndex(index - 1)}/>
                    <button className="next" onClick={() => setIndex(index + 1)}/>
                </div>
            </div>
        </div>
    );
}