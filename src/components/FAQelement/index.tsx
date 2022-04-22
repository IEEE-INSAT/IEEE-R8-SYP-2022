import React from 'react';

import './faq.css';

interface question {
    category: string,
    question: string,
    answer: string,
    open: boolean,
}

interface FAQProps {
    faq: question;
    index: number;
    toggleFAQ: (index: number,category : string) => void;
    key?: number;
}

export default function FAQelement({faq,index,toggleFAQ}:FAQProps) : JSX.Element {

    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index,faq.category)}
        >
            <div className="faq-question">
                {"Question "+ (index+1) + ": " + faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}