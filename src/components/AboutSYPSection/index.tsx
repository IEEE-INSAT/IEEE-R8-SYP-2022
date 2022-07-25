import './style.css';
import React from 'react';

interface paragraphItem {
    title: string;
    content: string;
    picture?: string;
}

interface ParagraphBlockProps {
    data: paragraphItem[];
}

export default function ParagraphBlock({data}: ParagraphBlockProps) {
    return (
        <div className='paragraph-block-section'>
            {
                data.map((el, indx) => {
                    return <div key={indx}>
                        <div className='paragraph-block-title'>
                            {el.title}
                        </div>
                        <div className='paragraph-block-content'>
                            {el.content}
                        </div>
                        {
                            (el.picture) ?
                                <div className='paragraph-block-picture'>
                                    <img src={el.picture}/>
                                </div>
                                : ""}
                    </div>

                })
            }

        </div>
    );
}
