import React from 'react';
import './RegistrationCardsSectionStyles.css';

import RegistrationOffer from '../../components/RegistrationOffer';

export default function RegistrationCardsSection() {
    return (
        <div className="registrationCardsSection">
            <RegistrationOffer
                title="Students / Young Professionals Registrations"
                twoBedPrice="365"
                threeBedPrice="350"
                noBedPrice="260"
            />
            <RegistrationOffer
                title="Regular Registration"
                oneBedPrice="490"
                noBedPrice="320"
            />
        </div>
    );
}