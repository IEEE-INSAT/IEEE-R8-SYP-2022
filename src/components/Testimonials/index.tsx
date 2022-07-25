import React from "react";
import {useState, useEffect} from "react";

import TestimonialXL from '../TestimonialXL';
import TestimonialSM from '../TestimonialSM';

import data from '../../data/Abouts and other fixed files/Testimonials.json';
import LeftArrow from '../../assets/LeftArrow.png';
import RightArrow from '../../assets/RightArrow.png';

import './Testimonials.css';


interface person {
    name: string;
    role: string;
    description: string;
}


export default function Testimonials() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

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

    return (
        <div className="testimonials-container">
            <h4>WHAT OTHERS SAY</h4>
            <h2>Testimonials</h2>
            <div className="section-center">
                {people.map((item: person, indexPeople) => {
                    const {  name, role, description } = item;
                    let position = 'nextSlide';
                    if (indexPeople === index) {
                        position = 'activeSlide';
                    }
                    if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                        position = 'lastSlide';
                    }
                    return width > breakpoint ? (
                        <TestimonialXL
                            key={indexPeople}
                            position={position}
                            description={description}
                            name={name}
                            role={role}
                            src={require(`../../assets/images/testimonials/${name}.jpg`)}
                        />
                    ) : (
                        <TestimonialSM
                            key={indexPeople}
                            position={position}
                            description={description}
                            name={name}
                            role={role}
                            src={require(`../../assets/images/testimonials/${name}.jpg`)}
                        />
                    );
                })}
                <div className="buttons">
                    <div className="prev" onClick={() => setIndex(index - 1)}>
                        <img src={LeftArrow} alt="" />
                    </div>
                    <div className="next" onClick={() => setIndex(index + 1)}>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
