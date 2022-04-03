import React from 'react';
import './Sponsors.css';
import img from "../../data/sponsor-logos/sp-ph.jpeg";

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
                        <img className="sponsor-logo" src={sponsor.path} alt={sponsor.name} key={i}/>
                    ))
                }
            </div>
        </div>
    );
}