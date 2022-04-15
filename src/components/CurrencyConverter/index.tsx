import React from "react";
import CurrencyInput from "../CurrencyInput";
import arrow from '../../assets/images/arrow.svg'
import './style.css';
import ThemedButton from "../ThemedButton";
import CurrencyBills from "../CurrencyBills";

export default function CurrencyConverter() {
    return (
        <div className="currencyContainer blockElement">
            <div className="currencyBlockTitle">Currency</div>
            <div className="currencyBlockDesc">The national currency is the Tunisian dinar, denoted by the symbol &quot;دينار&quot; or &quot;DT&quot; (ISO code: TND).</div>
            <div className="mobileBills">
                <CurrencyBills />
            </div>
            <div className="currencyInputBlock">
                <CurrencyInput />
                <img className="arrow" src={arrow} />
                <CurrencyInput />
            </div>
            <div className="currencyConvertBtn">
                <ThemedButton width="100%" height="" color="secondary" text="Convert" onClick={() => { console.log("j") }}></ThemedButton>
            </div>
        </div>
    );
}