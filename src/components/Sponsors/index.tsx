import React from 'react';
import './Sponsors.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from 'react-reveal/Fade';

export interface SponsorItem {
    name: string;
    filename: string;
    type: sponsorTypes;
    link: string;
}

type sponsorTypes = 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Society';
enum TypeColor{
    Platinum="E5E5E5",
    Gold="FFD700",
    Silver="C5C5C5",
    Bronze="CD7F32",
    Society="00629B"
}
interface SponsorsProps {
    items: SponsorItem[];
    types: sponsorTypes[];
}

export default function Sponsors({ items, types }: SponsorsProps) {
    return (
        <>
            {types.map((type, indx) => (
                <div className={'sponsor-logo-row ' + type} key={indx}>
                    <div>{type}</div>
                    <div>
                        {items
                            .filter((sponsor) => {
                                return sponsor.type === type;
                            })
                            .map((sponsor, i) => (
                                <Fade key={i}>
                                    <a
                                        className="sponsor-container"
                                        href={sponsor.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            className={sponsor.type.toLowerCase()}
                                            src={require(`../../assets/images/sponsors/${sponsor.filename}`)}
                                            alt={sponsor.name}
                                        />
                                        <div className="sponsor-type-overlay">
                                            <span>{sponsor.type + (type !== 'Society' ? ' sponsor' : '')}</span>
                                        </div>
                                    </a>
                                </Fade>
                            ))}
                    </div>
                </div>
            ))}
        </>
    );
}
