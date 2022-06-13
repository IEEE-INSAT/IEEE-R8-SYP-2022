import React from 'react';
import './RegistrationCardsSectionStyles.css';

import RegistrationOffer from '../../components/RegistrationOffer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Fade from "react-reveal/Fade";

export default function RegistrationCardsSection() {
    return (
        <div className="registrationCardsSection">
            <Fade>

                <RegistrationOffer
                    title="Students / Young Professionals Registrations"
                    twoBedPrice="365"
                    threeBedPrice="350"
                    noBedPrice="260"
                />
            </Fade>

            <Fade>
                <RegistrationOffer
                    title="Regular Registration"
                    oneBedPrice="490"
                    noBedPrice="320"
                />
            </Fade>
        </div>
    );
}