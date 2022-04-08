import React from 'react';
import './Sponsors.css';
import {Animated} from "react-animated-css";

interface SponsorItem {
    name: string;
    path: string;
}

interface SponsorsProps {
    items: SponsorItem[]
}


export default function Sponsors({items}: SponsorsProps) {
    return (
        <div className="sponsors-container">
            <h4>EVENT SPONSORS</h4>
            <h2>Official Sponsors</h2>
            <p className="sponsors-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <div className="sponsor-logo-container">
                {
                    items.map((sponsor, i) => (
                        <Animated animationInDelay={i*150} key={i} animationIn="fadeIn" animationOut="fadeIn" isVisible={true}>
                            <img className="sponsor-logos" src={sponsor.path} alt={sponsor.name} />
                        </Animated>    
                    ))
                }

            </div>
        </div>
    );
}