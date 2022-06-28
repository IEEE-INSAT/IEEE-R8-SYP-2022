import React from 'react';
import RegistrationCard from '../RegistrationCard';
import './RegistrationOfferStyle.css';

interface RegistrationOfferProps {
    title: string;
    twoBedPrice?: string;
    threeBedPrice?: string;
    noBedPrice: string;
    oneBedPrice?: string;
    verticalPlacement: 'top' | 'bottom';
}

export default function RegistrationOffer({
                                              title,
                                              twoBedPrice,
                                              threeBedPrice,
                                              noBedPrice,
                                              oneBedPrice,
                                              verticalPlacement,
                                          }: RegistrationOfferProps) {
    return (
        <div className="registrationOffer">
            <h1>{title}</h1>
            <div className="offersCards">
                <RegistrationCard
                    title="With Accommodation"
                    type="withAcc"
                    twoBedPrice={twoBedPrice}
                    threeBedPrice={threeBedPrice}
                    oneBedPrice={oneBedPrice}
                    verticalPlacement={verticalPlacement}
                    horizontalPlacement="left"
                />
                <RegistrationCard
                    title="Without Accommodation"
                    type="withoutAcc"
                    noBedPrice={noBedPrice}
                    verticalPlacement={verticalPlacement}
                    horizontalPlacement="right"
                />

            </div>

        </div>
    );
}
