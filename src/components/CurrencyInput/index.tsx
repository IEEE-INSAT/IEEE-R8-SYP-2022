import React from "react";
import './style.css';

export default function CurrencyInput() {
    return (
        <div className="currencyInputArea">
            <input className="currencyInputArea-input" placeholder="1.000" />
            <div className="currencyInputArea-curr"><div>USD</div></div>
        </div>
    );
}