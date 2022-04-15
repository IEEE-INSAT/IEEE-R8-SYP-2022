import React from "react";
import BillContainer from "../BillContainer";
import './style.css';

export default function CurrencyBills() {
    return (
        <div className=" billsContainer">
            <BillContainer bill="5" />
            <BillContainer bill="10" />
            <BillContainer bill="20" />
            <BillContainer bill="50" />
        </div>
    );
}