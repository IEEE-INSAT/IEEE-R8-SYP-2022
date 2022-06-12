import React from "react";
import './RegistrationDescription.css';

import ThemedButton from "../ThemedButton";

export default function RegistrationDescription() {
    return (
        <div className="registrationDescription">
            <p className="registrationParagraph">
                Registration will soon be open, further details will be provided on our social media.
            </p>
            <ThemedButton text="Registration will soon be open"  color="secondary" />
        </div>
    );
}
