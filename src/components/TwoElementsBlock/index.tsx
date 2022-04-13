import React from "react";
import './style.css';

interface ITwoElementsBlock {
    children: React.ReactNode,
    direction?: "reverse" | "";
}

export default function TwoElementsBlock({ children, direction = "" }: ITwoElementsBlock) {
    return (
        <div className={"twoElmContainer " + direction}>
            {children}
        </div>
    );
}