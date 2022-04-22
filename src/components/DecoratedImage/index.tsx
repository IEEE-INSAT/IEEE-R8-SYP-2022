import './style.css';
import React from "react";

interface IDecoratedImage {
    img: string;
}

export default function DecoratedImage({ img }: IDecoratedImage) {
    // 
    // <img className='background-decorator' src='images/decorator_background.png' />
    return (
        <div className='decorated-image-container blockElement'>
            <div className='image-container'>
                <img src={img} />
            </div>
        </div>
    );
}