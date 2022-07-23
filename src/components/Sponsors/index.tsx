import React from 'react';
import './Sponsors.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";

interface SponsorItem {
    name: string;
    filename: string;
    type: string;
    link: string;
}

interface SponsorsProps {
    items: SponsorItem[]
}


export default function Sponsors({items}: SponsorsProps) {
    return (
        <div className="sponsor-logo-row">
            {

                items.map((sponsor, i) => (
                    <Fade key={i}>
                        <a className="sponsor-container"
                           href={sponsor.link}
                           target="_blank"
                           rel="noreferrer">
                            <img className={sponsor.type === 'Platinum' ? "platinum" : "gold"}
                                 src={require(`../../assets/images/sponsors/${sponsor.filename}`)}
                                 alt={sponsor.name}/>

                            <div className="sponsor-type-overlay">
                                <span>{sponsor.type} sponsor</span>
                            </div>

                        </a>

                    </Fade>
                ))
            } </div>
    );
}