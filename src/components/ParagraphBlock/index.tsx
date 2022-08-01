import './style.css';
import React from 'react';
import VideoDisplay from "../VideoDisplay";

interface paragraphItem {
    title: string;
    content: string;
    picture?: string;
    video?: string;
}

interface ParagraphBlockProps {
    data: paragraphItem[];
}

export default function ParagraphBlock({data}: ParagraphBlockProps) {
    return (
        <div className='paragraph-block-section'>
            {
                data.map((el, indx) => {
                    return <div className={indx % 2 ? "paragraph-block-item" : "paragraph-block-item odd"} key={indx}>
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
                                : ""
                        }
                        {
                            (el.video) ?
                                <VideoDisplay link={el.video}/>
                                : ""
                        }

                    </div>

                })
            }

        </div>
    );
}
