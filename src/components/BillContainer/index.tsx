import React from "react";
import './style.css';
import bill5TND from './../../assets/images/bills/5tnd.png';
import bill10TND from './../../assets/images/bills/10tnd.png';
import bill20TND from './../../assets/images/bills/20tnd.png';
import bill50TND from './../../assets/images/bills/50tnd.png';

interface IBillContainer {
    bill: "5" | "10" | "20" | "50";
}

const billImages = {
    "5": bill5TND,
    "10": bill10TND,
    "20": bill20TND,
    "50": bill50TND,
}

export default function BillContainer({ bill }: IBillContainer) {
    return (
        <div className={"pos-" + bill + "tnd"}>
            <div className="billImageContainer">
                <img className="billImage" src={billImages[bill]} />
            </div>
            <div className="billValue">
                {bill} TND = 69 USD
            </div>
        </div>
    );
}