import React, { useEffect, useState } from "react";
import CurrencyInput from "../CurrencyInput";
import arrow from '../../assets/images/arrow.svg'
import './style.css';
import ThemedButton from "../ThemedButton";
import CurrencyBills from "../CurrencyBills";

interface Props{ 
    coversionCoef: number;
}

export default function CurrencyConverter({ coversionCoef }: Props) {
    const [USD, setUSD] = useState<string>("1");
    const [TND, setTND] = useState<string>((parseFloat(USD) * coversionCoef).toFixed(2));
    

    return (
        <div className="currencyContainer blockElement">
            <div className="currencyBlockTitle">Currency</div>
            <div className="currencyBlockDesc">The national currency is the Tunisian dinar, denoted by the symbol &quot;دينار&quot; or &quot;DT&quot; (ISO code: TND).</div>
            <div className="mobileBills">
                <CurrencyBills />
            </div>
            <div className="currencyInputBlock">
                <CurrencyInput currency={"USD"} value={USD} handleChange={(e) => setUSD(e.currentTarget.value)} />
                <img className="arrow" src={arrow} />
                <CurrencyInput currency="TND" value={TND} />
            </div>
            <div className="currencyConvertBtn">
                <ThemedButton width="100%" height="" color="secondary" text="Convert" onClick={() => { setTND((parseFloat(USD) * coversionCoef).toFixed(2)) }}></ThemedButton>
            </div>
        </div>
    );
}