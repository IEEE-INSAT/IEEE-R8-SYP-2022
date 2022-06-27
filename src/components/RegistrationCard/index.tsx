import React from 'react';
import './RegistrationCardStyles.css';
import ConferenceIcon from './../../assets/images/registration/conference.svg';
import HotelIcon from './../../assets/images/registration/hotel.svg';
import LunchIcon from './../../assets/images/registration/lunch.svg';
import DinnerIcon from './../../assets/images/registration/meals.svg';
import TransportIcon from './../../assets/images/registration/transport.svg';
import BedIcon from './../../assets/images/registration/bed.svg';
import BreakfastIcon from './../../assets/images/registration/breakfast.svg';


let benefits: string[];

interface RegistrationCardProps {
    title: string;
    type: 'withAcc' | 'withoutAcc';
    twoBedPrice?: string;
    threeBedPrice?: string;
    noBedPrice?: string;
    oneBedPrice?: string;
    verticalPlacement: "top" | "bottom"
    horizontalPlacement: "right" | "left";
}

export default function RegistrationCard({
                                             title,
                                             type,
                                             twoBedPrice,
                                             threeBedPrice,
                                             noBedPrice,
                                             oneBedPrice,
                                             verticalPlacement,
                                             horizontalPlacement
                                         }: RegistrationCardProps) {
    let linearGradientDegree = 45;

    if (verticalPlacement === 'top' && horizontalPlacement === 'right')
        linearGradientDegree = 225;

    if (verticalPlacement === 'top' && horizontalPlacement === 'left')
        linearGradientDegree = 135;

    if (verticalPlacement === 'bottom' && horizontalPlacement === 'right')
        linearGradientDegree = 315;

    if (verticalPlacement === 'bottom' && horizontalPlacement === 'left')
        linearGradientDegree = 45;


    if (type === 'withoutAcc') {
        benefits = ['Transportation between congress venues', 'Participation in all congress sessions'];
    } else if (type === 'withAcc') {
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
        <div className="registrationCard"
             style={{background: `linear-gradient(${linearGradientDegree}deg, rgba(133, 22, 22, 0.73) 73%, #CB8B4E 92.57%)`}}>
            <div className="registrationCardContent">
                <h3>{title}</h3>
                {type === 'withAcc' ? (
                    <div className="registrationCardIcons">
                        <img src={ConferenceIcon} alt="Conference"/>
                        <img src={TransportIcon} alt="Transport"/>
                        <img src={HotelIcon} alt="Hotel"/>
                        <img src={BreakfastIcon} alt="Lunch"/>
                        <img src={LunchIcon} alt="Lunch"/>
                        <img src={DinnerIcon} alt="Dinner"/>
                    </div>
                ) : (
                    <div className="registrationCardIcons">
                        <img src={ConferenceIcon} alt="Conference"/>
                        <img src={TransportIcon} alt="Transport"/>
                    </div>
                )}
                <ul className="registrationCardElements">
                    {benefits.map((el: string, key: number) => (
                        <li key={key}>{el}</li>
                    ))}
                </ul>
            </div>

            {type === 'withAcc' && !oneBedPrice ? (
                <div className="registrationCardPrices">
                    <div className="priceInfoContainer twoBeds">
                        <div className="cardBedIcons">
                            <img src={BedIcon} alt="Bed"/>
                            <img src={BedIcon} alt="Bed"/>
                        </div>
                        <span className="price">{twoBedPrice} $</span>
                    </div>
                    <div className="priceInfoContainer threeBeds">
                        <div className="cardBedIcons">
                            <img src={BedIcon} alt="Bed"/>
                            <img src={BedIcon} alt="Bed"/>
                            <img src={BedIcon} alt="Bed"/>
                        </div>
                        <span className="price">{threeBedPrice} $</span>
                    </div>
                </div>
            ) : type === 'withAcc' && oneBedPrice ? (
                <div className="registrationCardPrices" style={{left: '59%'}}>
                    <div className="cardBedIcons">
                        <img src={BedIcon} alt="Bed"/>
                    </div>
                    <span className="price">{oneBedPrice} $</span>

                </div>
            ) : (
                <div className="registrationCardPrices " style={{left: '74%'}}>
                    <div className="priceInfoContainer">
                        <span className="price">{noBedPrice} $</span>
                    </div>
                </div>
            )}
        </div>
    );
}
