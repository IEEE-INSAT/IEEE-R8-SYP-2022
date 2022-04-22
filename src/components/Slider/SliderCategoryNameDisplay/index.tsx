import './style.css';
import React from "react";

interface ISliderCategoryNameDisplay {
    name: string;
    isSelected: boolean;
    onClick: () => void;
}

export default function SliderCategoryNameDisplay({ name, isSelected, onClick }: ISliderCategoryNameDisplay) {
    return (
        <div onClick={onClick} className={'slide-display-category-name' + (isSelected ? ' slide-selected-category' : '')}>
            {name}
        </div >
    );
}