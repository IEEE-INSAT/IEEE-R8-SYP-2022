import './style.css';
import React from "react";

interface ISliderCategoryContent {
    title: string;
    picture: string;
    description: string;
}

export default function SliderCategoryContent({ title, picture, description }: ISliderCategoryContent) {
    return (
        <div className='slider-category-content'>
            <div className='slider-category-content-title'>
                {title}
            </div>
            <div className='slider-category-content-picture'>
                <img src={picture} />
            </div>
            <div className='slider-category-content-description'>
                {description}
            </div>
        </div>
    );
}