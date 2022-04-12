import React from "react";
import './style.css';

interface ITwoElementsBlock {
    children: React.ReactNode
}

export default function TwoElementsBlock(props: ITwoElementsBlock) {
    return (
        <div className="twoElmContainer">
            {props.children}
        </div>
    );
}