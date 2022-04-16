import React from "react";
import './style.css';

interface ControllerProps{
    value: string;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    currency: "USD" | "TND";
}

export default function CurrencyInput({ value, handleChange, currency }: ControllerProps) {
    return (
        <div className="currencyInputArea">
            <input className="currencyInputArea-input" placeholder="1.000" type="number" onChange={handleChange} value={value} />
            <div className="currencyInputArea-curr"><div>{currency}</div></div>
        </div>
    );
}