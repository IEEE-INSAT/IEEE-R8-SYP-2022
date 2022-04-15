import React from "react";
import './style.css';

interface ITextBlock {
    title: string;
    children: React.ReactNode;
}

export default function TextBlock({ title, children }: ITextBlock) {
    return (
        <div className="textBlockContainer blockElement">
            <div className="textBlock-title">{title}</div>
            <div className="textBlock-body">
                {children}
            </div>
        </div>
    );
}