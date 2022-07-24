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

type sponsorTypes = "Platinum" | "Gold" | "Silver" | "Bronze" | "Society";

interface SponsorsProps {
    items: SponsorItem[];
    types: sponsorTypes[]
}


export default function Sponsors({items, types}: SponsorsProps) {
    return (
        <>
            {types.map((type, indx) => <div className={"sponsor-logo-row " + type} key={indx}>
                {
                    items.filter(sponsor => {
                        return sponsor.type === type
                    })
                        .map((sponsor, i) => (
                            <Fade key={i}>
                                <a className="sponsor-container"
                                   href={sponsor.link}
                                   target="_blank"
                                   rel="noreferrer">
                                    <img className={sponsor.type.toLowerCase()}
                                         src={require(`../../assets/images/sponsors/${sponsor.filename}`)}
                                         alt={sponsor.name}/>
                                    <div className="sponsor-type-overlay">
                                        <span>{sponsor.type + (type !== 'Society' ? " sponsor" : "")}</span>
                                    </div>

                                </a>
                            </Fade>
                        ))
                }
            </div>)
            }
        </>
    );
}