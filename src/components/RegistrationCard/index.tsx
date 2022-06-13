import React from 'react';
import './RegistrationCardStyles.css';
import ConferenceIcon from './../../assets/images/registration/conference.svg';
import HotelIcon from './../../assets/images/registration/hotel.svg';
import LunchIcon from './../../assets/images/registration/lunch.svg';
import DinnerIcon from './../../assets/images/registration/meals.svg';
import TransportIcon from './../../assets/images/registration/transport.svg';
import BedIcon from './../../assets/images/registration/bed.svg';

/*
import { ReactComponent as BedIcon } from './../../assets/images/registration/bed.svg';
import { ReactComponent as ConferenceIcon } from './../../assets/images/registration/conference.svg';
import { ReactComponent as HotelIcon } from './../../assets/images/registration/hotel.svg';
import { ReactComponent as LunchIcon } from './../../assets/images/registration/lunch.svg';
import { ReactComponent as DinnerIcon } from './../../assets/images/registration/meals.svg';
import { ReactComponent as TransportIcon } from './../../assets/images/registration/transport.svg';
*/
/*const REGISTRATION_ICONS:ReactElement[] = [
    <ConferenceIcon key={1} />,
    <HotelIcon key={2} />,
    <LunchIcon key={3} />,
    <DinnerIcon key={4} />,
    <TransportIcon key={5} />,
];
const BED_ICON: ReactElement = <BedIcon />;*/

let benefits;

interface RegistrationCardProps {
    title: string;
    type: 'withAcc' | 'withoutAcc';
    twoBedPrice?: string;
    threeBedPrice?: string;
    noBedPrice?: string;
    oneBedPrice?: string;
}

export default function RegistrationCard({
    title,
    type,
    twoBedPrice,
    threeBedPrice,
    noBedPrice,
    oneBedPrice,
}: RegistrationCardProps) {
    if (type !== 'withAcc') {
        benefits = ['Transportation between congress venues', 'Participation in all congress sessions'];
    } else {
        benefits = [
            'Transportation between congress venues',
            'Participation in all congress sessions',
            'Accommodation',
            'Breakfast',
            'Coffee breaks',
            'Lunch breaks',
            'Dinners',
        ];
    }
    return (
        <div className="registrationCard">
            <div className="registrationCardContent">
                <h3>{title}</h3>
                {type === 'withAcc' ? (
                    <div className="registrationCardIcons">
                        <img src={ConferenceIcon} alt="ConferenceIcon" />
                        <img src={TransportIcon} alt="TransportIcon" />
                        <img src={HotelIcon} alt="HotelIcon" />
                        <img src={DinnerIcon} alt="DinnerIcon" />
                        <img src={LunchIcon} alt="LunchIcon" />
                    </div>
                ) : (
                    <div className="registrationCardIcons">
                        <img src={ConferenceIcon} alt="ConferenceIcon" />
                        <img src={TransportIcon} alt="TransportIcon" />
                    </div>
                )}
                <ul className="registrationCardElements">
                    {benefits.map((el, key) => (
                        <li key={key}>{el}</li>
                    ))}
                </ul>
            </div>

            {type === 'withAcc' && !oneBedPrice ? (
                <div className="registrationCardPrices">
                    <div className="priceInfoContainer twoBeds">
                        <div className="cardBedIcons">
                            <img src={BedIcon} alt="BedIcon" />
                            <img src={BedIcon} alt="BedIcon" />
                        </div>
                        <span className="price">{twoBedPrice} $</span>
                    </div>
                    <div className="priceInfoContainer threeBeds">
                        <div className="cardBedIcons">
                            <img src={BedIcon} alt="BedIcon" />
                            <img src={BedIcon} alt="BedIcon" />
                            <img src={BedIcon} alt="BedIcon" />
                        </div>
                        <span className="price">{threeBedPrice} $</span>
                    </div>
                </div>
            ) : type === 'withAcc' && oneBedPrice ? (
                <div className="registrationCardPrices" style={{ left: '53%' }}>
                    <div className="priceInfoContainer twoBeds">
                        <div className="cardBedIcons">
                            <img src={BedIcon} alt="BedIcon" />
                        </div>
                        <span className="price">{oneBedPrice} $</span>
                    </div>
                </div>
            ) : (
                <div className="registrationCardPrices " style={{ left: '74%' }}>
                    <div className="priceInfoContainer">
                        <span className="price">{noBedPrice} $</span>
                    </div>
                </div>
            )}
        </div>
    );
}
