import React from 'react';
import './Sponsors.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";
import ThemedButton from '../ThemedButton';
import { Link } from 'react-router-dom';

interface SponsorItem {
    name: string;
    filename: string;
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
            If you want to increase awareness for your company, You’re in the right place ! 
            </p>
            <div className="sponsor-logo-container">
                {
                    items.map((sponsor, i) => (
                        <Fade key={i}>
                            <img className="sponsor-logos" src={require(`../../assets/images/sponsors/${sponsor.filename}`)} alt={sponsor.name} />
                        </Fade>    
                    ))
                }
                <Link to="/sponsors" ><ThemedButton text='CONTACT US' onClick={() => window.scrollTo(0, 0)} color='secondary' width='500px' /></Link> 

            </div>
        </div>
    );
}