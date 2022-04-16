import React from "react";
import BillContainer from "../BillContainer";
import './style.css';

export default function CurrencyBills() {
    return (
        <div className=" billsContainer">
            <BillContainer bill="5" coversionCoef={0.33} />
            <BillContainer bill="10" coversionCoef={0.33} />
            <BillContainer bill="20" coversionCoef={0.33} />
            <BillContainer bill="50" coversionCoef={0.33} />
        </div>
    );
}